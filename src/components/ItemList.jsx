import React from 'react';
import Item from "./Item"
const ItemList = ({productos}) => {
    return (
        
        <>
            {productos.map((UnProducto) => (
                <Item key = {UnProducto.id} id={UnProducto.id} title={UnProducto.title} stock={UnProducto.stock} img={UnProducto.img} price={UnProducto.price} />))}
        </>
    )
};

export default ItemList;