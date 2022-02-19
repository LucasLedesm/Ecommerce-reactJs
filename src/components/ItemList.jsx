import React from 'react';
import Item from "./Item"
import { Link } from 'react-router-dom';

const ItemList = ({elements}) => {

    const swords = elements.filter(elements => elements.idCategory <= "3");
    const axes = elements.filter(elements => elements.idCategory > 3 & elements.idCategory <= 6);
    const maces = elements.filter(elements => elements.idCategory  >= 7 & elements.idCategory <= 9);
    const spears = elements.filter(elements => elements.idCategory  >= "9,1" );
    

    return (
        <>
            {elements.map((UnProducto) => (
                <Item key = {UnProducto.id} id={UnProducto.id} item={UnProducto.item} idCategory={UnProducto.idCategory} description={UnProducto.description} stock={UnProducto.stock} pictureUrl={UnProducto.pictureUrl} price={UnProducto.price} />))}
        </>
    )
};

export default ItemList;