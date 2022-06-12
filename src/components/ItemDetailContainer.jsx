import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer() {
    const [toy, setToy] = useState([])

    useEffect(() => {
        const juguetes = new Promise((res, rej) => {
            setTimeout(() => {
                res([
                { id:'001', 
                nombre: 'Anakin', 
                apellido: 'Skywalker', 
                image:'https://m.media-amazon.com/images/I/71xNjFxx6ZL._AC_SX569_.jpg', 
                precio: 'CLP$ 30.000', 
                descripcion: 'Es un joven Jedi, aparece como un héroe de la Guerra de los clones, pero luego se pasa al lado oscuro de la fuerza como Darth Vader.'},
                ]);
            }, 2000);
        });
        juguetes
            .then(res => setToy(res))
            .catch(error => console.error("Error:", error))
    
    }, [])
    
    
    return( <>
        <ItemDetail toy={toy} />
    </>)

}
export default ItemDetailContainer;