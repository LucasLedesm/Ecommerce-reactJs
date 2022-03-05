import React from 'react';
import Item from "./Item"
import Loader from './Loader';

const ItemList = ({items}) =>{

    console.log(items);
    return(
        <>
        {
            items.length > 0
            ? items.map(item =>
                <Item 
                key={item.id}
                id={item.id}
                name={item.nombre}
                description={item.descripcion}
                idCategory={item.idCategory}
                pictureUrl={item.imagen}
                price={item.precio}
                stock={item.stock}/>) 
                :<p><Loader/></p>
            }
        </>
    );
    
}
    export default ItemList;