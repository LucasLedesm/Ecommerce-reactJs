import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoProvedor';


const CartWidget = () => {
    const test = useContext(CarritoContext);

    return <>


        <Link to={"/cart"} type="button" className="btn btn-primary mx-4 position-relative">
        <i className="bi bi-cart2" role="img" aria-label="cart"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {test.totalI}
            </span>
        </Link>
    </>
};

export default CartWidget;
