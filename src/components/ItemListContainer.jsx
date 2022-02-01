import React from 'react';
import CardCart from './CardCart';

const ItemListContainer = () => {
    return <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <CardCart/>
        <CardCart/>
        <CardCart/>
        <CardCart/>
        <CardCart/>
        <CardCart/>
        <CardCart/>
        <CardCart/>
        <CardCart/>
    </div>
};

export default ItemListContainer;
