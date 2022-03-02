import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoProvedor';




const Cart = () => {
  const { removeItem, totalCost } = useContext(CarritoContext);
  const carrito = useContext(CarritoContext);
  console.log(carrito.cartList);



  return (

    <div classNameName="container d-flex">
      <div classNameName="col-md-6">
        <h3 className='text-white'>Carrito</h3>
        {
          carrito.cartList.length > 0 && carrito.cartList.map(item => (
            <div className="card text-white bg-dark border-info mb-3" style={{ maxwidth: '540px' }}>
              <div className="row g-0">
                <div className="col-md-2 ">
                  <img src={item.pictureUrl} alt="ilustracion" style={{ width: '150px', height: '150px' }}></img>
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text"><small className="text-muted">{item.cantidadItems} X ${item.price}</small></p>
                    <p className="card-text">precio total: $ {item.price*item.cantidadItems}</p>
                    <button className="btn btn-light" type="button" onClick={() => removeItem(item.id)}>Eliminar</button>
                  </div>
                </div>
              </div>
            </div>
          )
          )
        }
        <div>
          <h6>Total: {totalCost.reduce((a, b) => a + b, 0)}</h6>
          {/* <button className="btn btn-light" type="button" onClick={carrito.clear}>Vaciar</button> */}
        </div>
        {
        carrito.cartList.length > 0
       ?<button className="btn btn-light" type="button" onClick={
           carrito.clear}>Vaciar</button>
       :<h5 className='text-white'>Su carro está vacio</h5>  }
      </div>
    </div>
  );
}

export default Cart;
