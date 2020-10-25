import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore} from '../../firebase'
import Item from './item/Item.js';
import Loading from '../Loading/Loading';

function ItemList(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const {id} = useParams();

    useEffect(()=>{
        setLoading(true)
        const db = getFirestore();
        const itemCollection = db.collection("items");
        let filteredCollection = itemCollection;
        if( id === undefined || id === 'best-sellers') {
            if(id === 'best-sellers') filteredCollection = itemCollection.where('destacado','==', true);
            filteredCollection.get()
                .then((querySnapshot) => {
                    if (querySnapshot.size === 0) {
                        console.log("no results")
                    }
                    setProducts(querySnapshot.docs.map(doc => { return ({id: doc.id, ...doc.data()})}));

                }).catch((error) => {
                console.log("Error searching items", error);
                setError(error)
            }).finally(()=>{
                setLoading(false);
            })

        }else{
            const catCollection = db.collection("categories");
            const categoryDocRef = catCollection.where("key", "==",id).get()
               .then((querySnapshot) => {
                   if (querySnapshot.size === 0){
                       filteredCollection = itemCollection;
                   } else{
                       const categoryID = querySnapshot.docs[0].id;
                       const categoryDocRef = db.collection("categories").doc(categoryID);
                       filteredCollection = itemCollection.where('category','==', categoryDocRef);
                   }
                   filteredCollection.get()
                       .then((querySnapshot) => {
                           if (querySnapshot.size === 0) {
                               console.log("no results")
                           }
                           setProducts(querySnapshot.docs.map(doc => { return ({id: doc.id, ...doc.data()})}));

                       }).catch((error) => {
                       console.log("Error searching items", error);
                       setError(error)
                   }).finally(()=>{
                       setLoading(false);
                   })
               })
           ;

        }

    },[id]);


    if (!error) {
        if(loading){
            return <Loading/>;
        }else{
            return (
            <div className="container cards-holder"><div className="row">
                {products.map((product) => (
                    <Item product={product} key={product.id} />
                ))}
            </div></div>
        );}
    } else return <span>{error}</span>;
}

export default ItemList;

