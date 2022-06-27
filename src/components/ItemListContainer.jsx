import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import ItemList from "./ItemList";
import ItemListLayout from "./ItemListLayout";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"


function ItemListContainer() {
    const greet = ["Bienvenido al E-Commerce de Star Wars "];
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
        <ItemListLayout greeting={greet} name={"Gabriel"}/>
        <ItemList products={items} />
    </>)

}
export default ItemListContainer;