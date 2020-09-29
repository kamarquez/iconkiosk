import React ,{useContext, useEffect} from "react";
import { NavLink as RRNavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './CartIcon.css';
import {NavLink} from "reactstrap";

export function CartIcon(){
    const [cart, setCart] = useContext(CartContext);
    const items = cart;
    const qty = items.reduce(function(prev, cur) { return prev +(cur.cantidad); }, 0);
        useEffect(() => {
    }, [cart])

    return <div className="cart-icon-container"><NavLink tag={RRNavLink} to="/cart" activeClassName="active"><i className="fa fa-shopping-cart"></i>({qty})</NavLink></div>
}