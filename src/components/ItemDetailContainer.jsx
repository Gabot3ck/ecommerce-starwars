import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer() {
    const [item, setItem] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const productos = new Promise((res, rej) => {
            setTimeout(() => {
                res({ 
                    id:'001', 
                    nombre: 'Anakin', 
                    apellido: 'Skywalker', 
                    image:'https://m.media-amazon.com/images/I/71xNjFxx6ZL._AC_SX569_.jpg', 
                    precio: 'CLP$ 30.000', 
                    descripcion: 'Es un joven Jedi, aparece como un héroe de la Guerra de los clones, pero luego se pasa al lado oscuro de la fuerza como Darth Vader.'
                });
            }, 2000);
        });

        productos
            .then((res) => {
                setItem(res);
                setIsLoading(false);
            })
            .catch(error => console.error("Error:", error))
    
    }, [])
    
    
    return( <>
        {isLoading ? "Cargando detalle ..." : <ItemDetail item={item} />}
    </>)

}
export default ItemDetailContainer;