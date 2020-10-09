import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {CartContext} from '../../../context/CartContext';
import CartProducts from './CartProducts';

const Cart = () => {
    const [cart, setCart, cartTotal, cartQty] = useContext(CartContext);

    return (
    <section className= "pt-5 pb-5">
        <div className= "container">
            <div className= "row w-100" >
                <div className= "col-lg-12 col-md-12 col-12">
                    <h3 className= "display-5 mb-2 text-center"> Carrito de compras </h3>
                    <p className="mb-5 text-center">{cartQty} items en el carrito</p>
                    {cart.length > 0 ? <CartProducts total={cartTotal} /> : 'No hay productos en el carrito'}
                </div>
            </div>
            <div className="row mt-4 d-flex align-items-center">
                <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                    <Link to="/"><i className="fa fa-arrow-left mr-2"></i> Continuar comprando</Link>
                </div>
            </div>
        </div>
    </section>);
};
export default Cart