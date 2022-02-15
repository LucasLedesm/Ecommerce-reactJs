import React, { useState } from 'react';
import ItemList from './ItemList';



const productos = [
    {
        id: 1,
        title: "rouser ns200",
        stock: 32,
        img: "src: https://cdn.bajajauto.com/-/media/Images/bajajauto/brands/bajaj-bikes/pulsar/pulsar-ns-200/design/webp/Design-01.ashx",
        price: 332000
    },
    {
        id: 2,
        title: "kawazaki Z400",
        stock: 2,
        img: "src: https://cdn.bajajauto.com/-/media/Images/bajajauto/brands/bajaj-bikes/pulsar/pulsar-ns-200/design/webp/Design-01.ashx",
        price: 747000
    },
    {
        id: 3,
        title: "Honda CBR600",
        stock: 6,
        img: "src: https://cdn.bajajauto.com/-/media/Images/bajajauto/brands/bajaj-bikes/pulsar/pulsar-ns-200/design/webp/Design-01.ashx",
        price: 942000
    },
    {
        id: 4,
        title: "Yamaha R1",
        stock: 5,
        img: "src: https://cdn.bajajauto.com/-/media/Images/bajajauto/brands/bajaj-bikes/pulsar/pulsar-ns-200/design/webp/Design-01.ashx",
        price: 1332000
    },
    {
        id: 5,
        title: "Susuki gpx1000",
        stock: 1,
        img: "src: https://cdn.bajajauto.com/-/media/Images/bajajauto/brands/bajaj-bikes/pulsar/pulsar-ns-200/design/webp/Design-01.ashx",
        price: 1232000
    },
]

const ItemListContainer = () => {



    
    const [ListadoProductos, setListadoProductos] = useState([])


    const prodPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            setListadoProductos(productos)
            ListadoProductos ? resolve(ItemList) : reject("no se completo")
        }, 2000);
    })


    prodPromise
        .then(console.log)
        .catch(console.warn)
    return <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        
      <ItemList/>
    </div>
};


// const [productos, setproductos] = useState([])
// const prodPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         setproductos(productosJson)
//         productos ? resolve(productos) : reject("no se completo")
//     }, 2000);
// })


// prodPromise
//     .then(console.log)
//     .catch(console.warn)

export default ItemListContainer;

