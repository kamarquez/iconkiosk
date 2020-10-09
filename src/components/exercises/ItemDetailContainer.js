import React, {Component} from 'react';
import {getFirestore} from '../../../../firebase'
import ItemDetail from "./ItemDetail";
import Loading from "../../Loading/Loading";

class ItemDetailContainer extends  Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            data: [],
            //productID : this.props.id,
            productID: props.match.params.id
        };
    }

    /*getProduct() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    id: 1,
                    name: "Especieros Steel",
                    description: "Especieros con imán y base metálica. Cada especiero tiene doble apertura para especiar.",
                    price: 3790,
                    photo: "/images/1.jpg",
                });
            }, 1000);
        });
    }*/

    getProducts() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        name: "Especieros Steel",
                        description: "Especieros con imán y base metálica. Cada especiero tiene doble apertura para especiar.",
                        price: 3790,
                        photo: "/images/1.jpg",
                    },
                    {
                        id: 2,
                        name: "Cesto Washday",
                        description: "Cesto en forma de bolsón, de tela impermeable por dentro. Se puede lavar. Se mantiene erguido.",
                        price: 1399,
                        photo: "/images/2.jpg"
                    },
                    {
                        id: 3,
                        name: "Alfombra Placa",
                        description: "Placa de baño que seca tus pies de manera inmediata y ayuda a combatir el moho.",
                        price: 3590,
                        photo: "/images/3.jpg"
                    },
                    {
                        id: 4,
                        name: "Frutera Steel",
                        description: "Frutera plegable de acero inoxidable. Tiene 25,5 cm de alto y 35 cm de diámetro.",
                        price: 3490,
                        photo: "/images/4.jpg"
                    },
                    {
                        id: 5,
                        name: "Silla Curvus",
                        description: "Material: Hierro cuadrado, Chapa Cal 16 | Terminación: Pintura Horneada.",
                        price: 6500,
                        photo: "/images/5.jpg"
                    },
                    {
                        id: 6,
                        name: "Base monitor",
                        description: "Material: Madera Enchapado Curupixa. | Peso máximo de apoyo: 15 kg.",
                        price: 2500,
                        photo: "/images/6.jpg"
                    },
                    {
                        id: 7,
                        name: "Secaplatos",
                        description: "Monopieza de forma geometrica sólida y robusta capaz de alojar 6 platos y 12 cubiertos.",
                        price: 200,
                        photo: "/images/7.jpg"
                    },
                    {
                        id: 8,
                        name: "Soporte bicicleta",
                        description: "Material: Madera Lenga | Peso: 1,5kg | Peso máximo de apoyo: 20 kg.",
                        price: 1900,
                        photo: "/images/8.jpg"
                    },
                    {
                        id: 9,
                        name: "Soporte Manguera",
                        description: "Monopieza en acero inoxidable. Adecuado para mangueras de hasta 30 m.",
                        price: 750,
                        photo: "/images/9.jpg"
                    },
                    {
                        id: 10,
                        name: "Mensula Monti",
                        description: "Monopieza de chapa plegada de 3,2mm puede soportar hasta 50kg de carga.",
                        price: 790,
                        photo: "/images/10.jpg"
                    },
                    {
                        id: 11,
                        name: "Gabinete Matafuego",
                        description: "Algo de estilo para señalizar y contener el matafuego.",
                        price: 1200,
                        photo: "/images/11.jpg"
                    },
                    {
                        id: 12,
                        name: "Perchero Rama",
                        description: "Perchero de pie fabricado en aluminio esmaltado. Alto 170 cm. 5 ganchos",
                        price: 9390,
                        photo: "/images/12.jpg"
                    },
                ]);
            }, 2000);
        });
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        //si conectara con una api como ML
        //fetch('https://api.mercadolibre.com/items/MLA841413632')
        this.getProducts()
            .then((response) => {
                let res = response.find(obj => { return obj.id == this.state.productID})
                //console.log(res)
                this.setState({isLoading: false, data: res})
            })
            .catch((err) => {
            //console.log(err);
        });

    }

    render() {
        const { data, isLoading, id } = this.state;

        if (isLoading) {
            return <Loading />;
        }

        return (
            <ItemDetail product={data} />
        );
    }

}

export default ItemDetailContainer;