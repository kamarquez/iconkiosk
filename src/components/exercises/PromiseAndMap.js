import React, {useState, useEffect} from "react";

function Item(props) {
    return (
        <>
            <li key={props.producto.id}>{props.producto.nombre}</li>
        </>
    );
}


function ItemsList() {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState("");

    obtenerProductos()
        .then((productos) => {
            setProductos(productos);
        })
        .catch((err) => {
            setError(err);
        });
    if (!error) {
        return (
            <ul>
                {productos.map((producto) => (
                    <Item producto={producto} />
                ))}
            </ul>
        );
    } else return <span>{error}</span>;
}

function obtenerProductos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, nombre: "Celular" },
                { id: 2, nombre: "Televisor" },
                { id: 3, nombre: "Heladera" },
            ]);
        }, 2000);
    });
}