import React from 'react'
import ItemCount from './ItemCount';
import Itemlist from './ItemList'

const Item = ({item}) => {
    Itemlist();

    
  return (
    <div className="container">

        <div className="col">
            <div className="card shadow-sm">
                <h1>{item.title}</h1>
                <img src={item.img} alt="ilustracion"  /> 
                <div className="card-body">
                    <p className="card-text">{item.description}</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="btn-group">
                            <ItemCount stock={item.stock} initial={1} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3>${item.price} Stock:{item.stock}</h3>
            </div>
        </div>
    </div>
  )
  
}

export default Item