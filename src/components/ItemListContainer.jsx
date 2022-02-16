import React, { useState } from 'react';
import ItemList from './ItemList';



const productos = [
    {
        id: 1,
        title: "rouser ns200",
        stock: 32,
        img: "https://solomoto.es/wp-content/uploads/2017/07/suzuki_gsx250r_11.jpg",
        price: 332000
    },
    {
        id: 2,
        title: "kawazaki Z400",
        stock: 2,
        img: " https://images.pexels.com/photos/5192247/pexels-photo-5192247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        price: 747000
    },
    {
        id: 3,
        title: "Honda CBR600",
        stock: 6,
        img: " https://images.pexels.com/photos/5192247/pexels-photo-5192247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        price: 942000
    },
    {
        id: 4,
        title: "Yamaha R1",
        stock: 5,
        img: " https://images.vexels.com/media/users/3/70229/raw/734ae57a473a1acc0bff6ab5fd545575-hombre-montando-moto.jpg",
        price: 1332000
    },
    {
        id: 5,
        title: "Susuki gpx1000",
        stock: 1,
        img: "https://solomoto.es/wp-content/uploads/2017/07/suzuki_gsx250r_11.jpg",
        price: 1232000
    },
]

const ItemListContainer = () => {



    
    const [ListadoProductos, setListadoProductos] = useState([])


    const prodPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            setListadoProductos(productos)
            ListadoProductos ? resolve(ListadoProductos) : reject("no se completo")
            
        }, 2000);
    })


    prodPromise
        .then(console.log)
        .catch(console.warn)
    return <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        
      <ItemList productos={ListadoProductos} />
    </div>
};

export default ItemListContainer;

