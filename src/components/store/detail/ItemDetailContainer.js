import React, {Component} from 'react';
import {getFirestore} from '../../../firebase'
import ItemDetail from "./ItemDetail";
import Loading from "../../Loading/Loading";

class ItemDetailContainer extends  Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            data: [],
            productID: props.match.params.id
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        const db = getFirestore()
        const itemCollection = db.collection('items');
        const item = itemCollection.doc(this.state.productID);
        item.get()
            .then((doc) => {
                if (!doc.exists) {
                    console.log("Item does not exist!");
                    this.setState({isLoading: false})
                }else{
                    //console.log(doc.data())
                  this.setState({isLoading: false, data: { id: doc.id, ...doc.data() }})
                    //console.log(this.state)
                }
            })
            .catch((err) => {
            //console.log(err);
        });

    }

    render() {
        const { data, isLoading } = this.state;

        if (isLoading) {
            return <Loading />;
        }

        return (
            <ItemDetail product={data} />
        );
    }

}

export default ItemDetailContainer;