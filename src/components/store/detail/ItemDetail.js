import React, {useContext, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import Counter from "../counter/Counter";
import CounterButton from "../counter/CounterButton";
import { CartContext} from "../../../context/CartContext";

export default function Item(props) {
    const [cart, setCart] = useContext(CartContext);
    const [cantidad, setCantidad] = useState(0);

    const onAddToCart = () => {
        if(cantidad>0){
            //console.log('comprar');
            let items = [...cart];
            let index = items.findIndex(x=> x.id === props.product.id);
            let item = props.product;
            item.cantidad = cantidad;
            console.log(index);
            if (index !== -1){
                item.cantidad += items[index].cantidad;
                items[index] = item;
                //console.log(items)
                setCart(items);
            }else{
                setCart(currentCart => [...currentCart, item])
            }
        }
    };

    const getCounterData = data => {
        setCantidad(data.counter)
    }


    useEffect(() => {
    }, [cart])



    return <div className="container" key={props.product.id}>
            <section className="card">
                <div className="card-body">
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="pro-img-details">
                            <img src={props.product.photo + '?v=' + props.product.id} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h4 className="pro-d-title">{props.product.name}</h4>
                        <p>
                            {props.product.description}
                        </p>

                        <div className="m-bot15"><strong>Price : </strong> <span className="amount">${props.product.price}</span></div>
                        <Counter onChange={getCounterData} min={0} max={props.product.stock} initial={0}>
                            <CounterButton disabled={cantidad<=0} btnCls={'btn btn-primary add-btn'} btnAction={onAddToCart} btnText={`Añadir ${cantidad} items`} />
                        </Counter>
                        <Link to='/cart'>
                            <button style={{"maxWidth": 160, "marginTop": 20}} className="btn btn-block btn-dark btn-secondary btn-lg">
                                <i className="fa fa-shopping-cart"></i> Comprar </button>
                        </Link>
                    </div>
                </div>
                </div>
            </section>
    </div>
}

