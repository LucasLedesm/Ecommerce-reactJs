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
                <Route path='/caregory/:id' element={<ItemDetailContainer />} />
                <Route path="/Item/:id" element ={<ItemDetailContainer/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas