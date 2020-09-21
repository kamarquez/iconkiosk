import React from "react";

export default function CartItem(){
    return(
        <tr>
        <td data-th="Product">
            <div className="row">
                <div className="col-md-3 text-left">
                    <img src="https://via.placeholder.com/250x250/5fa9f8/ffffff" alt="" className="img-fluid d-none d-md-block rounded mb-2 shadow " />
                </div>
                <div className="col-md-9 text-left mt-sm-2">
                    <h4>Product Name</h4>
                    <p className="font-weight-light">Brand &amp; Name</p>
                </div>
            </div>
        </td>
        <td data-th="Price">$49.00</td>
        <td data-th="Quantity">
            <input type="number" className="form-control form-control-lg text-center" />
        </td>
        <td className="actions" data-th="">
            <div className="text-right">
                <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                    <i className="fs fa-trash"></i>
                </button>
            </div>
        </td>
    </tr>)
}