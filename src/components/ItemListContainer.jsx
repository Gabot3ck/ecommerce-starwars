import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import ItemList from "./ItemList";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"


function ItemListContainer() {
    const {id} = useParams();
    const [items, setItems] = useState([]);

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
        }

    }, [id]);

    

    return( <>
        <ItemList products={items} />
    </>)

}
export default ItemListContainer;