import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import mockProducts from "../data/products";


function ItemDetailContainer() {
    const [item, setItem] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const productos = new Promise((res, rej) => {
            setTimeout(() => {
                res(mockProducts);
            }, 2000);
        });

        productos
            .then(res => id ? res.find(item => item.id === id) : res)
            .then((res) => {
                setItem(res);
                setIsLoading(false);
            })
            .catch(error => console.error("Error:", error))
    
    }, [id])
    
    
    return( <>
        {isLoading ? "Cargando detalle ..." : <ItemDetail item={item} />}
    </>)

}
export default ItemDetailContainer;