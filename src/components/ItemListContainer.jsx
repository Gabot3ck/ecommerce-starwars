import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import ItemListLayout from "./ItemListLayout";

function ItemListContainer() {
    const greet = ["Bienvenido al E-Commerce de Star Wars "]
    const [products, setProducts] = useState([])

    useEffect(() => {
        const juguetes = new Promise((res, rej) => {
            setTimeout(() => {
                res([
                { id:'001', nombre: 'Anakin', apellido: 'Skywalker', image:'https://m.media-amazon.com/images/I/71xNjFxx6ZL._AC_SX569_.jpg' },
                { id:'002', nombre: 'Luke',   apellido: 'Skywalker', image:'https://http2.mlstatic.com/D_NQ_NP_654023-MLC32882792051_112019-O.webp'},
                { id:'003', nombre: 'Leia',   apellido: 'Skywalker', image:'https://images-na.ssl-images-amazon.com/images/I/418Alq4HZYL._SX300_SY300_QL70_FMwebp_.jpg'},
                { id:'004', nombre: 'Obi-Wan',apellido: 'Kenobi', image:'https://images-na.ssl-images-amazon.com/images/I/61DqTM75frS.__AC_SX300_SY300_QL70_FMwebp_.jpg'},
                { id:'005', nombre: 'Hans',   apellido: 'Solo', image:'https://images-na.ssl-images-amazon.com/images/I/716oYlZXVcL.__AC_SX300_SY300_QL70_FMwebp_.jpg'},
                { id:'006', nombre: 'Ahsoka',   apellido: 'Tano', image:'https://images-na.ssl-images-amazon.com/images/I/315XjE5qcbL.jpg'}
                ]);
            }, 2000);
        });
        juguetes
            .then(res => setProducts(res))
            .catch(error => console.error("Error:", error))
    
    }, [])
    
    
    return( <>
        <ItemListLayout greeting={greet} name={"Gabriel"}/>
        <ItemList products={products} />
    </>)

}
export default ItemListContainer;