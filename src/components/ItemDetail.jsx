import { useState, useContext } from 'react';
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoProvedor';

const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0);
    const carrito = useContext(CarritoContext);


    const onAdd = (cantidad) => {
        // alert("Se agregaron "+ " " + cantidad + item.nombre + " " + "al carrito.");
        <> <div className="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">
                "Se agregaron " + {cantidad} + {item.nombre} +  "al carrito."
                </div>
                <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div></>

        setItemCount(cantidad);
        carrito.addToCart(item, cantidad);
        carrito.calcularCantidadItems(cantidad)
    }
    return (
        <>
            <div className="container d-flex pt-4 mt-4">
                <div className="col-md-10">
                    <div className="card shadow-sm text-white bg-dark border-info align-items-center">
                        <div className=' col-md-10 d-flex justify-content-start pt-4'>
                            <Link to="/"><button className="btn btn-warning" type="button">Volver</button></Link>
                        </div>
                        <h1>{item.nombre}</h1>
                        <img src={item.imagen} alt="ilustracion" style={{ width: '100px', height: '100px' }} />
                        <div className="card-body">
                            <h3>${item.precio}</h3>
                            <p style={{ height: '100px' }} className="card-text"><strong>Equipable para:</strong>  {item.descripcion}</p>
                            <div className="d-flex justify-content-center align-items-center">
                                {
                                    itemCount === 0
                                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                                        : <Link to='/cart' ><button className="btn btn-light" type="button">Checkear compra</button></Link>

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ItemDetail