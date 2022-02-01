import React from 'react';

const CardCart = () => {
    return <div><div className="container">

        <div className="col">
            <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder:Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
                <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, minima.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">1</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">2</button>
                        </div>
                        <small className="text-muted">muted</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
};

export default CardCart;
