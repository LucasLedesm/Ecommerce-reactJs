import React from 'react';
import Item from "./Item"
const ItemList = ({productos}) => {
    return (
        
        <>
            {productos.map(() => (
                <Item key = {Item.id} id={Item.id} title={Item.title} stock={Item.stock} img={Item.img} price={Item.price} />))}
        </>
    )
};

export default ItemList;