import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from "../components/ItemListContainer"
import ItemDetailContainer from '../components/ItemDetailContainer'
import Navbar from '../components/Navbar'
import Cart from '../components/Cart'

const Rutas = () => {
    return (

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/e' element={<ItemDetailContainer />} />
                <Route path="/Cart" element ={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas