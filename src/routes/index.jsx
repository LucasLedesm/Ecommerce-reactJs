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
                <Route path='/Item/Swords' element={<ItemListContainer />}/>
                <Route path='/Item/Axes' element={<ItemListContainer />}/>
                <Route path='/Item/Maces' element={<ItemListContainer />}/>
                <Route path='/Item/Spears' element={<ItemListContainer />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas