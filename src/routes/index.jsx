import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from "../components/ItemListContainer"
import ItemDetailContainer from '../components/ItemDetailContainer'
import Navbar from '../components/Navbar'
import Cart from "../components/Cart"
import CarritoProvedor from '../context/CarritoProvedor'
import Loader from '../components/Loader'
import Order from '../components/Order'



const Rutas = () => {
    return (
        <CarritoProvedor>
             <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/item/:id' element={<ItemDetailContainer />} />
                    <Route path="/Category/:idCategory" element={<ItemListContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path='/Load' element={<Loader/>} />
                    <Route path='/Order' element={<Order/>} />

                </Routes>
            </BrowserRouter>
        </CarritoProvedor>
            )
}
export default Rutas