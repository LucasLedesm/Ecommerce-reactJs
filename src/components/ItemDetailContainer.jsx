import React, {useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
const {elements} = require("./producto");
const ItemDetailContainer = () => {
    const [dato,setDato]=useState({});

    const customFetch=(elements,timeout)=>new Promise((res)=>
          setTimeout(()=>{
               res(elements)
          },timeout)
    );

    useEffect(()=>{
        customFetch(elements[1],2000)
        .then(result=>setDato(result))
        .catch(error=>console.log(error))
        
    },[]);

    return(
     <ItemDetail item={dato}/>   
    );
}
export default ItemDetailContainer;