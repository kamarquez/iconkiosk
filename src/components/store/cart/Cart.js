import React, {useEffect} from 'react';
import CartProducts from './CartProducts';
export default function Cart(){
    return (
    <section className= "pt-5 pb-5">
        <div className= "container">
            <div className= "row w-100" >
                <div className= "col-lg-12 col-md-12 col-12">
                    <h3 className= "display-5 mb-2 text-center"> Shopping Cart </h3>
                    <p className="mb-5 text-center">3 items in your cart</p>
                    <CartProducts />
                </div>
            </div>
            <div className="row mt-4 d-flex align-items-center">
                <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                    <a href="/"><i className="fa fa-arrow-left mr-2"></i> Continuar comprando</a>
                </div>
            </div>
        </div>
    </section>);
};