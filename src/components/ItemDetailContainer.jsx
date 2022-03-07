import React, { useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import useFireStore from '../hooks/useFireStore';
import Loader from './Loader';



const ItemDetailContainer =()=>{

    const {id} = useParams();
    const {individual, load, getIndividualData} = useFireStore();

    useEffect(() => {
        getIndividualData({id})
    
      return () => {
        
      }
    }, [])
    
       
        return <>
         {load ? <Loader/> : <ItemDetail item={individual}/>}
        </>;
    }
export default ItemDetailContainer;