import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoProvedor';
import CartItem from './CartItem';
import Checkout from './Checkout';




const Cart = () => {
  const { removeItem, totalCost } = useContext(CarritoContext);
  const carrito = useContext(CarritoContext);



  return (

    <div classNameName="container d-flex card bg-dark border-info">
      <div className='row text-white d-flex justify-content-evenly p-4 my-4  bg-dark border-info '>
        <div className='col-6'>
          <CartItem />
        </div>
        <div className='col-4'>
          <Checkout />
        </div>
      </div>
    </div>

  );
}

export default Cart;
