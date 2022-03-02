import React from 'react';
import Item from "./Item"
import Loader from './Loader';

const ItemList = ({items}) =>{
    return(
        <>
        {
            items.length > 0
            ? items.map(item =>
        <Item 
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        idCategory={item.idCategory}
        id={item.id}
        pictureUrl={item.pictureUrl}
        price={item.price}
        stock={item.stock}/>) 
        :<p><Loader/></p>
        }
        </>
    );
    }
    export default ItemList;