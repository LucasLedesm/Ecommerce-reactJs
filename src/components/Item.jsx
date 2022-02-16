import React from 'react'
import ItemCount from './ItemCount';


const Item = ({id,title,stock,img,price}) => {
  return (
    <div className="container">
        <div className="col">
            <div className="card shadow-sm">
                <h1>{title}</h1>
                <img src={img} alt="ilustracion"  /> 
                <div className="card-body">
                    <p className="card-text">   description</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="btn-group">
                            <ItemCount stock={stock} initial={1} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <h3>${price} Stock:{stock}</h3>
            </div>
        </div>
    </div>
  )
  
}
console.log(Item);
export default Item