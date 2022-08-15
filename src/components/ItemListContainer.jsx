import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import ItemList from "./ItemList";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import Spinner from './Spinner';



function ItemListContainer() {
    const {id} = useParams();
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        const db = getFirestore();
        const coleccion = "items";

        const colleccionItems = collection(db, coleccion);

        if(id){
            const q = query(colleccionItems, where("category", "==" , id));

            getDocs(q).then((res) => {
                setItems(res.docs.map((el) => ({...el.data(), id:el.id}) ))
            })
            
        } else {
            getDocs(colleccionItems)
            .then((res) => {
                setItems(res.docs.map((el) => ({...el.data(), id:el.id}) ))
            })
            .finally(() => setIsLoading(false))
        }

    }, [id]);

    

    return(<>
        {isLoading ? <Spinner /> :  <ItemList products={items} />}
        {/* <ItemList products={items} /> */}
    </>)

}
export default ItemListContainer;