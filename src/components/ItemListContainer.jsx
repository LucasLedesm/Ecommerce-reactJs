import ItemList from './ItemList';
import React, { useEffect } from 'react'
import useFireStore from '../hooks/useFireStore';
import Loader from './Loader';



const ItemListContainer = () => {

    const {items, load, getData } = useFireStore()

    useEffect(() => {

        getData();
        
    }, []);

    console.log(items)

    return (
        <>
            <div className="row row-cols-3 d-flex g-3 mt-4 pt-4">
               {load ? <Loader/> : <ItemList items={items} />}
            </div>
        </>
    );
}
export default ItemListContainer;

