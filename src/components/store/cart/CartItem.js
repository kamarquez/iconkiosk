import React from "react";

export default function CartItem(props){
    const handleChange = ()=>{};
        return(
        <tr>
        <td data-th="Product">
            <div className="row">
                <div className="col-md-3 text-left">
                    <img src={props.product.photo} alt={props.product.name} className="img-fluid d-none d-md-block rounded mb-2 shadow " />
                </div>
                <div className="col-md-9 text-left mt-sm-2">
                    <h4>{props.product.name}</h4>
                    <p className="font-weight-light">{props.product.description}</p>
                </div>
            </div>
        </td>
        <td data-th="Price">${props.product.price}</td>
        <td data-th="Quantity">
            <input type="number" onChange={handleChange()} value={props.product.cantidad} readOnly className="form-control form-control-lg text-center" />
        </td>
        <td className="actions" data-th="">
            <div className="text-right">
                <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        </td>
    </tr>)
}