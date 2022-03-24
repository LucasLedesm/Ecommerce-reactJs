import ItemList from './ItemList';
import React, { useEffect } from 'react'
import useFireStore from '../hooks/useFireStore';
import Loader from './Loader';
import { useParams } from 'react-router-dom';




const ItemListContainer = () => {

    const {idCategory} = useParams()
    

    const {items, load, getData, getDataCategory } = useFireStore()

    useEffect(() => {

        if(idCategory){
            getDataCategory(idCategory)
        }else{
            getData();
        }


        
    }, [idCategory]);

    

    return (
        <>
            <div className="row row-cols-3 d-flex g-3 mt-4 pt-4">
               {load ? <Loader/> : <ItemList items={items} />}
            </div>
        </>
    );
}
export default ItemListContainer;

