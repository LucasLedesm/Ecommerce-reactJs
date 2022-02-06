import React, { useState } from 'react';
import CartWidget from './CartWidget';

const ItemCount = ({ stock, initial }) => {
    const [contador, setcontador] = useState(initial);
    const increment = (n) => {
        if (contador >= stock) {
            return
         }
        setcontador(contador+n)
    }
    const decrement = (n) => {
        if (contador < 1) {
           return
        }
        setcontador(contador-n)
    }

    return <div className='container border border-2 rounded-3'>
        <div className='row'>
            <div className='d-flex justify-content-between my-2' >
                <button onClick={() => decrement(1)} className='btn-secondary px-3 '>-</button>
                <p>{stock}</p>
                <p>{contador}</p>
                <button onClick={() => increment(1)} className='btn-secondary px-3'>+</button>
            </div>
            <button className='btn btn-primary btn-large my-2'>agregar al carrito<CartWidget /></button>
        </div>
    </div>;
};

export default ItemCount;
