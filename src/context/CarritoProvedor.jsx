import React, { createContext, useState } from 'react'


export const CarritoContext = createContext();


const CarritoProvedor = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [totalI, setTotalI] = useState(0);

  const addToCart = (item, cantidad) => {
    let encontrado = cartList.find(elem => elem.id === item.id)

    if (encontrado === undefined) {
      setCartList([
        ...cartList, {
          id: item.id,
          name: item.nombre,
          pictureUrl: item.imagen,
          price: item.precio,
          cantidadItems: cantidad
        }]);
    } else {
      encontrado.cantidadItems += cantidad;
    }
  };
  const removeItem = (id) => {
    setCartList(cartList.filter((cartItem) => cartItem.id !== id));
    let encontrado = cartList.find((cartItem) => cartItem.id === id)
    setTotalI(totalI - encontrado.cantidadItems);
  };
  const isInCart = (id) => {
    return cartList.find((cartItem) => cartItem.id === id)
  };
  const clear = () => {
    setCartList([]);
    setTotalI(0);
  };
  const calcularCantidadItems = (valor) => {
    setTotalI(totalI + valor);
  }
  const totalCost = cartList.map(elem => elem.price * elem.cantidadItems);
  return (
    <CarritoContext.Provider value={{ cartList, addToCart, removeItem, isInCart, clear, calcularCantidadItems, totalI, totalCost, setTotalI }}>
      {children}
    </CarritoContext.Provider>
  )
}

export default CarritoProvedor