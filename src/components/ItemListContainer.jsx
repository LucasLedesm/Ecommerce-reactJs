import React from 'react';
import Item from "./Item";

const ItemListContainer = () => {
    return <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
    </div>
};

export default ItemListContainer;
