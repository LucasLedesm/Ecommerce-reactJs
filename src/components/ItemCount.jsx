import React, {useState} from 'react';
import CartWidget from './CartWidget';

const ItemCount = () => {
    const [contador, setcontador] = useState(1);

    return <div className='container border border-2 rounded-3'>
        <div className='row'>
            <div className='d-flex justify-content-between my-2' >
                <button onClick  ={() => setcontador(contador-1)} className='btn-secondary px-3 '>-</button>
                <p>{contador}</p>
                <button onClick  ={() => setcontador(contador+1)} className='btn-secondary px-3'>+</button>
            </div>
            <button className='btn btn-primary btn-large my-2'>agregar al carrito<CartWidget/></button>
        </div>
    </div>;
};

export default ItemCount;
