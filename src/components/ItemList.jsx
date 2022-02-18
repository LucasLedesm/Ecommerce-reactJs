import React from 'react';
import Item from "./Item"
const ItemList = ({elements}) => {
    return (
        
        <>
            {elements.map((UnProducto) => (
                <Item key = {UnProducto.id} id={UnProducto.id} brand={UnProducto.brand} model={UnProducto.model} description={UnProducto.description} stock={UnProducto.stock} pictureUrl={UnProducto.pictureUrl} price={UnProducto.price} />))}
        </>
    )
};

export default ItemList;