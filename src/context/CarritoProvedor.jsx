import React, { createContext, useState } from 'react'


export const CarritoContext = createContext();


const CarritoProvedor=({children})=>{
  const [cartList,setCartList]=useState([]);
  
  const addToCart=(item,cantidad)=>{
      

      if(isInCart(item.id)){
      setCartList(cartList.map((cartItem)=>{
      return {...cartItem,cantidad:cartItem.cantidad+cantidad}
      })
      );
      }else{
          setCartList([
              ...cartList,{
              id:item.id,
              name:item.name,
              pictureUrl:item.pictureUrl,
              price:item.price,
              cantidad:cantidad,
              description:item.description
          }]);
      }
  };
  const removeItem=(id)=>{
  setCartList(cartList.filter((item)=>item.id!==id));
  };
  const isInCart=(id)=>{
  return cartList.find((cartItem)=>cartItem.id===parseInt(id))
  };
  const clear=()=>{
  setCartList([]);
  };

  return (
    <CarritoContext.Provider value={{cartList,addToCart,removeItem,isInCart,clear}}>
        {children}
    </CarritoContext.Provider>
  )
}

export default CarritoProvedor