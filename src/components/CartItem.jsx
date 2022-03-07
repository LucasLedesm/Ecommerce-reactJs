import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoProvedor';



const CartItem = () => {



    const { removeItem, totalCost } = useContext(CarritoContext);
    const carrito = useContext(CarritoContext);




    return (
        <div>
            <h1 className=' text-white'>Carrito</h1>
            {
                carrito.cartList.length > 0 && carrito.cartList.map(item => (
                    <div className="card text-white bg-dark mb-3  " >
                        <div className="row g-4 d-flex align-items-center">
                            <div className="col-md-2 ">
                                <img src={item.pictureUrl} alt="ilustracion" style={{ width: '100px', height: '100px' }}></img>
                            </div>
                            <div className="col-md-4">
                                <div className="card-body">
                                    <h4 className="card-title">{item.name}</h4>
                                    <p className="card-text">{item.description}</p>
                                    <p className="card-text"><small className="text-muted">{item.cantidadItems} X ${item.price}</small></p>
                                    <p className="card-text">precio total: $ {item.price * item.cantidadItems}</p>
                                    <button className="btn btn-warning" type="button" onClick={() => removeItem(item.id)}>Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                )
            }
            <div>
                <h3 className='text-white'>Total: $  {totalCost.reduce((a, b) => a + b, 0)}</h3>
            </div>
            {
                carrito.cartList.length > 0
                    ? <button className="btn btn-danger" type="button" onClick={
                        carrito.clear}>Vaciar</button>
                    : <h5 className='text-white'>Su carro está vacio</h5>
            }
        </div>

    )
}

export default CartItem