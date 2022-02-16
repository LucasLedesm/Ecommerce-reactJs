import React from 'react';
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
const ItemList = () => {
    return (
        
        <>
            {productos.map((Item) => (
                <item key={Item.id} id={Item.id} title={Item.title} stock={Item.stock} img={Item.img} price={Item.price} />))}
        </>
    )
};

export default ItemList;