import React,{useEffect, useState,useContext} from "react";
import {CartContext} from '../../../context/CartContext';
import { Alert } from 'reactstrap';
import {getFirestore} from "../../../firebase";
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import CartItem from './CartItem';
import Loading from "../../Loading/Loading";
import './CartProducts.css';
import Form from "./Formulario";


export default function CartProducts(){
    const [cart, setCart, cartTotal] = useContext(CartContext);
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState({name: '',phone: '', email: '', email2: ''});
    const [dataErrors, setDataErrors] = useState({name: '',phone: '',email: '',email2: ''});
    const [orderID, setOrderID] = useState(false);


    const handleRemoveItem = (itemID) => {
        let items = cart.filter(item => item.id !== itemID);
        if(items.length>0){
            setCart(items);
        }else{
            cleanCart();
        }
    };

    const cleanCart = () => {
        setCart([]);
    }

    const checkOut = () => {
        setLoading(true)
        const db = getFirestore()
        const orders = db.collection('orders');

        const newOrder = {
            "buyer": userData,
            "items": cart,
            "date":firebase.firestore.Timestamp.fromDate(new Date()),
            "total": cartTotal
        };

        orders.add(newOrder).then(({id})=>{
            //console.log(id);
            setOrderID(id)
        }).catch(err=>{
            console.log(err);
        }).finally(()=>{
            setLoading(false)
        })
    }

    async function manageStock(){
        console.log(orderID);
        const db = getFirestore();
        const itemsToUpdate = db.collection("items")
            .where(firebase.firestore.FieldPath.documentId(),'in',cart.map(i => i.id));

        const query = await itemsToUpdate.get()
        const batch = db.batch();
        const outOfStock = [];
        query.docs.forEach((docSnapshot, idx)=>{
            if(docSnapshot.data().stock >= cart[idx].cantidad){
                //console.log(docSnapshot.data().stock,cart[idx].cantidad)
                batch.update(docSnapshot.ref,{stock: docSnapshot.data().stock - cart[idx].cantidad})
            }else{
                outOfStock.push({...docSnapshot.data(),id: docSnapshot.id})
            }
        });
        if(outOfStock.length===0){
            await batch.commit();
        }
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }

    const validatePhone = (phoneno) => {
        var phone_no = /^\d{10}$/;
        return phone_no.test(phoneno);
    }

    const checkUserDataErrors = ()=>{
        let disabled = false;
        const errors = dataErrors;
        const data = userData;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (disabled = true)
        );

        Object.entries(data).forEach(
            ([key, val]) => (val == '' & key !='') && (disabled = true)
        );
        //console.log(disabled, userData, dataErrors)
        return disabled;
    }

    const handleUserData = (key, val) => {
        let dataerror = '';
        switch (key){
            case "name":
                dataerror = (val.length < 3) ? 'Full Name must be 5 characters long!' : '';
                setDataErrors(({...dataErrors, [key]:dataerror}));
                if(dataerror==''){
                    setUserData({...userData, [key]: val });
                }
                break;
            case 'email':
                dataerror = (!validateEmail(val)) ? 'Email no valido' : '';
                setDataErrors(({...dataErrors, [key]:dataerror}));
                if(dataerror==''){
                    setUserData({...userData, [key]: val });
                }
                break;
            case 'email2':
                dataerror = (!validateEmail(val) || val != userData.email) ? 'Email incorrecto' : '';
                setDataErrors(({...dataErrors, [key]:dataerror}));
                if(dataerror==''){
                    setUserData({...userData, [key]: val });
                }
                break
            case 'phone':
                dataerror =  (!validatePhone(val)) ? 'Telefono no valido' : '';
                setDataErrors(({...dataErrors, [key]:dataerror}));
                if(dataerror==''){
                    setUserData({...userData, [key]: val });
                }
                break
        }
        checkUserDataErrors();
    };


    useEffect(()=>{
        checkUserDataErrors();
        if(orderID) {
            manageStock().then((res)=>{
                console.log(res)
                }).catch(err=>{
                console.log(err);
            }).finally(()=>{
                console.log('finally');
            });
        }
    },[orderID, cart, userData])

    if (loading) {
        return <Loading/>;
    }else{
        return(
            <>{(orderID)&& <Alert color="primary">Su compra se realizó correctamente. Su código de seguimiento es <b>{orderID} </b></Alert>}
                <table id="shoppingCart" className="table table-condensed table-responsive">
                    <thead>
                    <tr>
                        <th>Producto</th>
                        <th style={{"width":"15%"}}>Precio</th>
                        <th style={{"width":"15%"}}>Cantidad</th>
                        <th style={{"width":"5%"}}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {cart.map(product => (<CartItem doneCO={orderID} handleRemoveItem={handleRemoveItem} product={product} key={product.id} />))}
                    </tbody>
                </table>
                {
                    (orderID)?
                        <>
                            <div className="float-right">
                                <h6>Subtotal:</h6>
                                <h3>${cartTotal}</h3>
                                <button onClick={cleanCart} className="btn btn-primary mb-4 btn-md pl-4 pr-4">Aceptar</button>
                            </div>
                        </>:
                        <>
                            <div className="row"><div className= "col-md-12">
                            <div className="float-right" style={{"paddingRight":20}}>
                                <h6>Subtotal:</h6>
                                <h3>${cartTotal}</h3>
                            </div></div></div>
                            <div className="d-flex justify-content-between bd-highlight" style={{"backgroundColor":"#effaff"}}>
                                <div className="p-2 chform">
                                    <Form getUserData={handleUserData}  errors={dataErrors} />
                                </div>
                                <div><button onClick={checkOut} disabled={checkUserDataErrors()} className="btn btn-primary m-2 btn-md pl-4 pr-4">Comprar</button></div>
                            </div>
                        </>
                }

            </>
        );

    }
}