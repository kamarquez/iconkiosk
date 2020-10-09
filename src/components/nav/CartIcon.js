import React ,{useContext} from "react";
import { NavLink as RRNavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './CartIcon.css';
import {NavLink} from "reactstrap";

export function CartIcon(){
    const [cart, setCart, cartTotal,cartQty] = useContext(CartContext);


    return <div className="cart-icon-container"><NavLink tag={RRNavLink} to="/cart" activeClassName="active"><i className="fa fa-shopping-cart"></i>({cartQty})</NavLink></div>
}