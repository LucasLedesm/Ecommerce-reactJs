import React from 'react'
import ItemCount from "./ItemCount"
const ItemDetail = ({item}) => {
    return(
        <>
         <div className="container d-flex">
            <div className="col-md-10">
                <div className="card shadow-sm align-items-center">
                    <h1>{item.item}</h1>
                    <h5>{item.idCategory}</h5> 
                    <img src={item.pictureUrl} alt="ilustracion" style={{ width: '100px', height: '100px' }} />
                    <div className="card-body">
                        <h3>${item.price}</h3>
                        <p style={{height: '100px' }} className="card-text"><strong>Equipable para:</strong>  {item.description}</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <ItemCount stock={item.stock} initial={1}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
       
        );
    }

export default ItemDetail