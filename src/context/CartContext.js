import React, {useState, useEffect } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState([]);
    const [cartQty, setCartQty] = useState(0);


    const sumaProductos = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
            totalVal += cart[i].price * cart[i].cantidad;
        }
        setCartTotal(totalVal);
    }

    const contarItems = () =>{
        const items = cart;
        const qty = items.reduce(function(prev, cur) { return prev +(cur.cantidad); }, 0);
        setCartQty(qty);
    }


    useEffect(() => {
        sumaProductos();
        contarItems();
    }, [cart])

    return (
        <CartContext.Provider value={[cart, setCart,cartTotal,cartQty]}>
            {props.children}
        </CartContext.Provider>
    )
}