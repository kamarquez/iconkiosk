import React,{useEffect, useState} from "react";
import CartItem from './CartItem';

export default function CartProducts(){
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
                <CartItem />
            </tbody>
        </table>
        <div className="float-right">
            <h6>Subtotal:</h6>
            <h3>$99.00</h3>
            <a href="#" className="btn btn-primary mb-4 btn-md pl-4 pr-4">Comprar</a>
        </div>
        </>
    );
}