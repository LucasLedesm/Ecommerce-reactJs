import ItemList from './ItemList';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from "react";
import db from '../service/firebase';



const ItemListContainer = () => {

    const [items, setItems] = useState([]);
  
    const getData = async () => {
try {
        const data = collection(db, "items")
        const col = await getDocs(data)
        const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
        setItems(result)
    } catch (error) {
    console.log(error);
}
    };

    

    useEffect(() => {
        getData()
    }, []);


    return (
        <>
            <div className="row row-cols-3 d-flex g-3 mt-4 pt-4">

                <ItemList items={items} />
            </div>


        </>
    );
}
export default ItemListContainer;

