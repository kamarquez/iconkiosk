import React, {useState} from 'react';
import './ItemDetail.css';
import Counter from "../counter/Counter";
import CounterButton from "../counter/CounterButton";

export default function Item(props) {
    const [cantidad, setCantidad] = useState(0);
    const onComprar = () => {
        console.log('comprar');
    };
    const getCounterData = data => {
        console.log(data);
        setCantidad(data.counter)
    }

    return <div className="container" key={props.product.id}>
            <section className="card">
                <div className="card-body">
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="pro-img-details">
                            <img src={props.product.photo + '?v=' + props.product.id} alt=""/>
                        </div>
                        <div className="pro-img-list">
                            <a href="#">
                                <img className="img-fluid" src={props.product.photo} alt=""/>
                            </a>
                            <a href="#">
                                <img className="img-fluid" src={props.product.photo} alt=""/>
                            </a>
                            <a href="#">
                                <img className="img-fluid" src={props.product.photo} alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h4 className="pro-d-title">{props.product.name}</h4>
                        <p>
                            {props.product.description}
                        </p>

                        <div className="m-bot15"><strong>Price : </strong> <span className="amount">${props.product.price}</span></div>
                        <Counter onChange={getCounterData} min={0} max={10} initial={0}>
                            <CounterButton btnCls={'form-control btn btn-primary add-btn'} btnAction={onComprar} btnText={`Comprar: ${cantidad}`} />
                        </Counter>
                    </div>
                </div>
                </div>
            </section>
    </div>
}

