import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore} from '../../firebase'
import Item from './item/Item.js';

function ItemList(){
    const [products, setProducts] = useState([]);
    //const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const categoryID = useParams();
    console.log(categoryID)

    useEffect(()=>{
        setLoading(true)
        const db = getFirestore();
        const itemCollection = db.collection("items");
        let filteredCollection;
        console.log(categoryID);
        if(categoryID == undefined){
            filteredCollection = itemCollection;
        } else if (categoryID == 1){
            filteredCollection = itemCollection.where('destacado','==', true);
        }else{
            filteredCollection = itemCollection.where('category','==', categoryID);
        }
        filteredCollection.get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log("no results")
                }
                setProducts(querySnapshot.docs.map(doc => { return ({id: doc.id, ...doc.data()})}));

            }).catch((error) => {
            console.log("Error searching items", error);
        }).finally(()=>{
            setLoading(false);
            console.log(loading);
        })
    },[]);

    /* useEffect(()=> {
         getProducts()
         .then((products) => {
             if(category.id === undefined){
                 setProducts(products);
             }else{
                 let categoryProducts = products.filter(obj => { return obj.category == category.id})
                 setProducts(categoryProducts);
             }
         })
         .catch((err) => {
             setError(err);
         })}
     ,[category])
 */
    if (!error) {
        return (
            <div className="container cards-holder"><div className="row">
                {products.map((product) => (
                    <Item product={product} key={product.id} />
                ))}
            </div></div>
        );
    } else return <span>{error}</span>;
}

export default ItemList;

function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    category: 2,
                    name: "Especieros Steel",
                    description: "Especieros con imán y base metálica. Cada especiero tiene doble apertura para especiar.",
                    price: 3790,
                    photo: "/images/1.jpg",
                },
                {
                    id: 2,
                    category: 2,
                    name: "Cesto Washday",
                    description: "Cesto en forma de bolsón, de tela impermeable por dentro. Se puede lavar. Se mantiene erguido.",
                    price: 1399,
                    photo: "/images/2.jpg"
                },
                {
                    id: 3,
                    category: 2,
                    name: "Alfombra Placa",
                    description: "Placa de baño que seca tus pies de manera inmediata y ayuda a combatir el moho.",
                    price: 3590,
                    photo: "/images/3.jpg"
                },
                {
                    id: 4,
                    category: 1,
                    name: "Frutera Steel",
                    description: "Frutera plegable de acero inoxidable. Tiene 25,5 cm de alto y 35 cm de diámetro.",
                    price: 3490,
                    photo: "/images/4.jpg"
                },
                {
                    id: 5,
                    category: 3,
                    name: "Silla Curvus",
                    description: "Material: Hierro cuadrado, Chapa Cal 16 | Terminación: Pintura Horneada.",
                    price: 6500,
                    photo: "/images/5.jpg"
                },
                {
                    id: 6,
                    category: 4,
                    name: "Base monitor",
                    description: "Material: Madera Enchapado Curupixa. | Peso máximo de apoyo: 15 kg.",
                    price: 2500,
                    photo: "/images/6.jpg"
                },
                {
                    id: 7,
                    category: 2,
                    name: "Secaplatos",
                    description: "Monopieza de forma geometrica sólida y robusta capaz de alojar 6 platos y 12 cubiertos.",
                    price: 200,
                    photo: "/images/7.jpg"
                },
                {
                    id: 8,
                    category: 3,
                    name: "Soporte bicicleta",
                    description: "Material: Madera Lenga | Peso: 1,5kg | Peso máximo de apoyo: 20 kg.",
                    price: 1900,
                    photo: "/images/8.jpg"
                },
                {
                    id: 9,
                    category: 2,
                    name: "Soporte Manguera",
                    description: "Monopieza en acero inoxidable. Adecuado para mangueras de hasta 30 m.",
                    price: 750,
                    photo: "/images/9.jpg"
                },
                {
                    id: 10,
                    category: 1,
                    name: "Mensula Monti",
                    description: "Monopieza de chapa plegada de 3,2mm puede soportar hasta 50kg de carga.",
                    price: 790,
                    photo: "/images/10.jpg"
                },
                {
                    id: 11,
                    category: 3,
                    name: "Gabinete Matafuego",
                    description: "Algo de estilo para señalizar y contener el matafuego.",
                    price: 1200,
                    photo: "/images/11.jpg"
                },
                {
                    id: 12,
                    category: 2,
                    name: "Perchero Rama",
                    description: "Perchero de pie fabricado en aluminio esmaltado. Alto 170 cm. 5 ganchos",
                    price: 9390,
                    photo: "/images/12.jpg"
                },
            ]);
        }, 2000);
    });
}
