import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';

const { elements } = require("./producto");

const ItemDetailContainer =()=>{
    const [item,setItem]=useState({});
    const {idItem}=useParams();
    const customFetch=(elements,timeout)=>{
        return new Promise((res)=>
              setTimeout(()=>{
                   res(elements)
              },timeout)
        );
    }
        useEffect(()=>{
                customFetch(elements.find(item=>item.id===parseInt(idItem)),2000)
                .then(result=>setItem(result))
                .catch(error=>console.log(error))
        },[idItem]);
    
        return(
         <ItemDetail item={item}/>
        );
    }
export default ItemDetailContainer;