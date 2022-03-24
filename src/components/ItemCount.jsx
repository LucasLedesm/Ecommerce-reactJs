import React, { useEffect, useState } from 'react';



const ItemCount = ({ stock, initial, onAdd }) => {


    const [contador, setcontador] = useState(initial);

    const increment = (n) => {
        if (contador >= stock) {
            return
        }
        setcontador(contador + n)
    }
    const decrement = (n) => {
        if (contador < 1) {
            return
        }
        setcontador(contador - n)
    }

    useEffect(()=>{
        },[contador]);

    return <div className='container border border-2 rounded-3'>
        <div className='row'>
            <label>Stock:{stock}</label>
            <div className='d-flex justify-content-between my-2' >
                <button onClick={() => decrement(1)} className='btn-secondary px-3 '>-</button>
                <p>{contador}</p>
                <button onClick={() => increment(1)} className='btn-secondary px-3'>+</button>
            </div>
            {
                stock && contador
                    ? <button className="btn btn-light" type="button" onClick={() => onAdd(contador)}>Agregar al Carrito</button>
                    : <button className="btn btn-light" type="button" disabled>Agregar al Carrito</button>
            }
        </div>
    </div>;
};

export default ItemCount;
