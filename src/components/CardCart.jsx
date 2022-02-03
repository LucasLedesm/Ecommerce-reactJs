import React from 'react';
import ItemCount from './ItemCount';

const CardCart = () => {
    return <div><div className="container">

        <div className="col">
            <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder:Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
                <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, minima.</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="btn-group">
                            <ItemCount />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
};

export default CardCart;
