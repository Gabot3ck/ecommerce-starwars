import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import Spinner from "./Spinner";




function ItemDetailContainer() {
    const [item, setItem] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const coleccion = "items";
        const itemRef = doc(db, coleccion, id)
        
        getDoc(itemRef)
            .then((res) => {
                if(res.exists()){
                    setItem({...res.data(), id:res.id})
                }
            })
            .finally(() => setIsLoading(false))
    }, [id])
    
    
    return( <>
        {isLoading ? <Spinner /> :  <ItemDetail item={item} />}
    </>)

}
export default ItemDetailContainer;