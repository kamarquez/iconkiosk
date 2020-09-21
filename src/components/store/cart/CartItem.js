import React from "react";

export default function CartItem(){
    let product= {
        id: 1,
        category: 2,
        name: "Especieros Steel",
        description: "Especieros con imán y base metálica. Cada especiero tiene doble apertura para especiar.",
        price: 3790,
        photo: "/images/1.jpg",
    }
        return(
        <tr>
        <td data-th="Product">
            <div className="row">
                <div className="col-md-3 text-left">
                    <img src={product.photo} alt="" className="img-fluid d-none d-md-block rounded mb-2 shadow " />
                </div>
                <div className="col-md-9 text-left mt-sm-2">
                    <h4>{product.name}</h4>
                    <p className="font-weight-light">{product.description}</p>
                </div>
            </div>
        </td>
        <td data-th="Price">${product.price}</td>
        <td data-th="Quantity">
            <input type="number" className="form-control form-control-lg text-center" />
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