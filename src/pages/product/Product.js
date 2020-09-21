import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import ItemDetailContainer from '../../components/store/detail/ItemDetailContainer';

const Product = (props)=> {
    const {id} = useParams();
    return <div>
        <ItemDetailContainer id={id}  />
    </div>
}

export default Product;