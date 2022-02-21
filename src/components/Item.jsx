import React from 'react'
import { Link } from 'react-router-dom';


const Item = (props) => {

    return (
        <div className="container d-flex">
            <div className="col-md-10">
                <div className="card shadow-sm align-items-center">
                    <h1>{props.name}</h1>
                    <img src={props.pictureUrl} alt="ilustracion" style={{ width: '100px', height: '100px' }} />
                    <div className="card-body">
                        <h3>${props.price}</h3>
                        <p style={{height: '100px' }} className="card-text"><strong>Equipable para:</strong>  {props.description}</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="btn-group">
                                <Link to={`/item/${props.id}`} className='btn btn-primary'>Ver Detalles</Link>
                                {/* <ItemCount stock={stock} initial={1} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Item