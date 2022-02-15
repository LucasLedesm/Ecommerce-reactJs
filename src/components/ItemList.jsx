import React from 'react';

const ItemList = ( { productos} ) => {
    return (
        <>
            {productos.map((item) => (<item key={item.id} id={item.id} title={item.title} stock={item.stock} img={item.img} price={item.price} />))}
        </>
    )
};

export default ItemList;