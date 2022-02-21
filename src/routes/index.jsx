import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from "../components/ItemListContainer"
import ItemDetailContainer from '../components/ItemDetailContainer'
import Navbar from '../components/Navbar'


const Rutas = () => {
    return (

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
                <Route path="/category/:idCategory" element={<ItemListContainer />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas