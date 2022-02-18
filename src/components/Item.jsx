import React from 'react'
import ItemCount from './ItemCount';


const Item = ({ id, item, idCategory, stock, description, pictureUrl, price }) => {
    return (
        <div className="container d-flex">
            <div className="col-md-10">
                <div className="card shadow-sm align-items-center">
                    <h1>{item}</h1>
                    <h5>{idCategory}</h5> 
                    <img src={pictureUrl} alt="ilustracion" style={{ width: '100px', height: '100px' }} />
                    <div className="card-body">
                        <h3>${price}</h3>
                        <p style={{height: '100px' }} className="card-text"><strong>Equipable para:</strong>  {description}</p>
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
export default Item