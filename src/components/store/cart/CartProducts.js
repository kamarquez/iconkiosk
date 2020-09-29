import React,{useEffect, useState,useContext} from "react";
import {CartContext} from '../../../context/CartContext';
import CartItem from './CartItem';
import Item from "../item/Item";

export default function CartProducts(){
    const [cart, setCart] = useContext(CartContext);
    const [cartTotal, setCartTotal] = useState(0);
    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
            totalVal += cart[i].price * cart[i].cantidad;
        }
        setCartTotal(totalVal);
    };

    useEffect(() => {
        total();
    }, [cart, cartTotal])


    return(
        <>
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
            {cart.map(product => (
                <CartItem product={product} key={product.id} />
            ))}
            </tbody>
        </table>
        <div className="float-right">
            <h6>Subtotal:</h6>
            <h3>${cartTotal}</h3>
            <a href="#" className="btn btn-primary mb-4 btn-md pl-4 pr-4">Comprar</a>
        </div>
        </>
    );
}