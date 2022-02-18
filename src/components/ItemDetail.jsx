import React from 'react'

const ItemDetail = ({item}) => {
    return(
        <>
        <div className="container">
            <div className="col">
                <div className="card shadow-sm">
                    <h1>{item.brand}{item.model}</h1>
                    <img src={item.pictureUrl} alt="ilustracion" />
                    <div className="card-body">
                        <h3>${item.price}</h3>
                        <p className="card-text">{item.description}</p>
                        <div className="d-flex justify-content-center align-items-center">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        );
    }

export default ItemDetail