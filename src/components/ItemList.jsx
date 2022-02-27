import React from 'react';
import Item from "./Item"

const ItemList = ({items}) =>{
    return(
        <>
        {
        items.map(item=>
        <Item 
        key={item.id}
        name={item.name}
        description={item.description}
        idCategory={item.idCategory}
        id={item.id}
        pictureUrl={item.pictureUrl}
        price={item.price}
        stock={item.stock}
        /> 
        ) 
        }
        </>
    );
    }
    export default ItemList;