import React from 'react'
import { useContext, useState } from 'react'
import { CarritoContext } from '../context/CarritoProvedor';
import useFireStore from '../hooks/useFireStore';   
import Order from './Order';


const Checkout = () => {

    const { totalCost } = useContext(CarritoContext);
    const carrito = useContext(CarritoContext);
    const [form, setForm] = useState({



        buyer : {
            name: "",
            lastName: "",
            phone: "",
            email: ""
        },
        items: carrito.cartList,
        total: { totalCost }
    })
    const { generateOrder, idOrder } = useFireStore();

    const handleChange = (e) => {
        setForm({
            ...form,
            buyer : {
                ...form.buyer,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        generateOrder({datos:form})

    }


    return (
        <>
         <form onSubmit={handleSubmit}>
            <h3>Formulario de Compra</h3>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input onChange={handleChange} name= "name" value={form.buyer.name} type="text" className="form-control" />
                <div className="form-text">Ingrese su nombre</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Apellido</label>
                <input onChange={handleChange} name="lastName" value={form.buyer.lastName} type="text" className="form-control" />
                <div className="form-text">Ingrese su apellido</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input onChange={handleChange} name="email" value={form.buyer.email} type="email" className="form-control" />
                <div className="form-text">Ingrese su Email</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Telefono</label>
                <input onChange={handleChange} name="phone" value={form.buyer.phone} type="number" className="form-control" />
                <div className="form-text">Ingrese un celular</div>
            </div>
           
            <button disabled ={!form.buyer.name|| !form.buyer.lastName || !form.buyer.email || !form.buyer.phone || totalCost.length === 0} onClick={carrito.clear} type="submit" className="btn btn-primary w-100">Finalizar compra</button>
        </form>

        { idOrder === undefined ? console.log("undefined") : <Order Orden ={idOrder}/>}
        
        </>
       

)
}


export default Checkout