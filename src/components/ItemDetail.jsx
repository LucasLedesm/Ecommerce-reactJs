import { useState, useContext } from 'react';
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoProvedor';

const ItemDetail = ({ item }) => {

    const [itemCount,setItemCount]=useState(0);
    const carrito = useContext(CarritoContext);

    
    const onAdd=(cantidad)=>{
        alert("Se agregaron "+ " " + cantidad + item.name + " " + "al carrito.");
        setItemCount(cantidad);
        carrito.addToCart(item,cantidad);
    } 
    return (
        <>
            <div className="container d-flex">
                <div className="col-md-10">
                    <div className="card shadow-sm text-white bg-dark border-info align-items-center">
                        <h1>{item.name}</h1>
                        <img src={item.pictureUrl} alt="ilustracion" style={{ width: '100px', height: '100px' }} />
                        <div className="card-body">
                            <h3>${item.price}</h3>
                            <p style={{ height: '100px' }} className="card-text"><strong>Equipable para:</strong>  {item.description}</p>
                            <div className="d-flex justify-content-center align-items-center">
                                {
                                    itemCount === 0
                                        ? <ItemCount stock={item.stock} initial={itemCount} item={item} onAdd={onAdd} />
                                        : <Link to='/cart' style={{ textDecoration: "none" }}><button className="btn btn-light" type="button">Checkear compra</button></Link>
                                       
                                }
                            </div>
                                <Link to="/"><button className="btn btn-light" type="button">Volver al inicio</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ItemDetail