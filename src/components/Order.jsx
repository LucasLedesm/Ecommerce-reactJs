import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../context/CarritoProvedor';


const Order = (Orden) => {

  const carrito = useContext(CarritoContext);

  return (
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel"><i className="bi bi-bug"></i>The Marketplace!<i className="bi bi-bug"></i></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Su orden ha sido procesada con exito! N° de orden:{Orden.Orden}</p>

          </div>
          <div class="modal-footer">
            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
            <Link type="button" to={"/"} button  onClick ={carrito.clear}  data-bs-dismiss="modal" className='btn btn-success w-100 mt-2' >Finalizar compra</Link>
          </div>
        </div>
      </div>
    </div>
    // <div className="container d-flex card bg-dark border-info text-center mt-4 pt-4">
    //   <div className="card-header text-white">
    //     <i className="bi bi-bug"></i>
    //     The Marketplace!
    //     <i className="bi bi-bug"></i>
    //   </div>
    //   <div className="card-body text-white">
    //     <h5 className="card-title text-white">Orden realizada exitosamente</h5>
    //     <p className="card-text text-white">Confirmaremos su compra por mail</p>
    //     <Link to={"/"} className="btn btn-primary">Inicio</Link>
    //   </div>
    //   <div className="card-footer text-muted">
    //     N° de orden:{Orden.Orden}
    //   </div>
    // </div>

  )
}

export default Order