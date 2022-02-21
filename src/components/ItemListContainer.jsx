import ItemList from './ItemList';
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
const {elements} = require("./producto");


const ItemListContainer =()=>{
    //TODO:Filtro productos por categoria
        const [items,setItems]=useState([]);
        const {idCategory}=useParams();
        const customFetch=(elements,timeout)=>{
            return new Promise((res)=>
                  setTimeout(()=>{
                       res(elements)
                  },timeout)
            );
     }
        
        useEffect(()=>{
            if(idCategory===undefined){
                customFetch(elements,2000)
                .then(result=>setItems(result))
                .catch(error=>console.log(error))
            }else{
                customFetch(elements.filter(item=>item.idCategory===parseInt(idCategory)),2000)
                .then(result=>setItems(result))
                .catch(error=>console.log(error))
            }
        },[idCategory]);
    
    
        return(
            <>
            <div className="row row-cols-3 d-flex g-3 mt-4 pt-4">
        
            <ItemList items={items}/>
            </div>
            
        
            </>
        );
    }
    export default ItemListContainer;

