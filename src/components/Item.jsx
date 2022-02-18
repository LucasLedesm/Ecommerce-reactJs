import React from 'react'
import ItemCount from './ItemCount';


const Item = ({ id, brand, model, stock, description, pictureUrl, price }) => {
    return (
        <div className="container ">
            <div className="col-md  ">
                <div className="card shadow-sm ">
                    <h1>{brand}</h1>
                    <h5>{model}</h5> 
                    <img src={pictureUrl} alt="ilustracion" style={{ width: '400px', height: '300px' }} />
                    <div className="card-body">
                        <h3>${price}</h3>
                        <p style={{height: '200px' }} className="card-text">{description}</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="btn-group">
                                <ItemCount stock={stock} initial={1} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
console.log(Item);
export default Item