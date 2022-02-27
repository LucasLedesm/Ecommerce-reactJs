import React from 'react';
import { Link } from 'react-router-dom';


const carritoImg = <i className="bi bi-cart2" role="img" aria-label="cart"></i>


const CartWidget = () => {


    return <>
        <Link to={"/cart"} className="btn btn-danger px-4 mx-4" >
            {carritoImg}
        </Link>
    </>
};

export default CartWidget;
