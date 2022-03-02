import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from "../components/ItemListContainer"
import ItemDetailContainer from '../components/ItemDetailContainer'
import Navbar from '../components/Navbar'
import Cart from "../components/Cart"
import CarritoProvedor from '../context/CarritoProvedor'


const Rutas = () => {
    return (
        <CarritoProvedor>
             <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                    <Route path="/category/:idCategory" element={<ItemListContainer />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </CarritoProvedor>
            )
}
export default Rutas