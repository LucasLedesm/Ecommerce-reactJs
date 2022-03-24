import React from 'react'
import { Link } from 'react-router-dom'


const Order = (Orden) => {


   
    return (
        <div className="container d-flex card bg-dark border-info text-center mt-4 pt-4">
        <div className="card-header text-white">
        <i className="bi bi-bug"></i>
          The Marketplace!
        <i className="bi bi-bug"></i>
        </div>
        <div className="card-body text-white">
          <h5 className="card-title text-white">Compra realizada exitosamente</h5>
          <p className="card-text text-white">Gracias por su compra!</p>
          <Link to={"/"}  className="btn btn-primary">Inicio</Link>
        </div>
        <div className="card-footer text-muted">
           N° de orden:{Orden.Orden}
        </div>
      </div>
      )
}

export default Order