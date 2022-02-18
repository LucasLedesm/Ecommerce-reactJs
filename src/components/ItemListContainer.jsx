import React, { useState } from 'react';
import ItemList from './ItemList';

const {elements} = require("./producto");


 const ItemListContainer = () => {

    const [ListadoProductos, setListadoProductos] = useState([])


    const prodPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            setListadoProductos(elements)
            ListadoProductos ? resolve(ListadoProductos) : reject("no se completo")
            
        }, 2000);
    })


    prodPromise
        .then(console.log)
        .catch(console.warn)
    return <div className="row row-cols-3 d-flex g-3 mt-4 pt-4">
        
      <ItemList elements={ListadoProductos} />
    </div>
 };

export default ItemListContainer;

