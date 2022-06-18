import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import ItemList from "./ItemList";
import ItemListLayout from "./ItemListLayout";
import mockProducts from "../data/products";


function ItemListContainer() {
    const greet = ["Bienvenido al E-Commerce de Star Wars "];
    const [products, setProducts] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const obtenerProductos = new Promise((res, rej) => {
            setTimeout(() => {
                res(mockProducts);
            }, 2000);
        });

        obtenerProductos
            .then(res => id ? res.filter(item => item.category === id) : res)
            .then(res => setProducts(res))
            .catch(error => console.error("Error:", error));

    
    }, [id]);

    

    return( <>
        <ItemListLayout greeting={greet} name={"Gabriel"}/>
        <ItemList products={products} />
    </>)

}
export default ItemListContainer;