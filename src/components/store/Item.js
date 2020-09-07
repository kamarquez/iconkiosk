import React from 'react';
import './Item.css';

export default function Item(props){
    return <div className="col-sm-6 col-md-4 col-lg-3 mt-4 d-flex"><div className="card text-left" key={props.product.id} >
                <img className="card-img-top" src={props.product.photo + '?v=' + props.product.id} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.product.name}</h5>
                    <p className="card-text">{props.product.description}</p>
                    <p className="card-price">${props.product.price}</p>
                </div>
            </div></div>
    }
