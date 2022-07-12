import { useState } from "react";

const ItemCount = ({initial, stock, onAdd})=> {

    const [cantidad, setCantidad] = useState(initial);

    const sumar = () => {
        if(stock > 0 ){
            cantidad < stock ? setCantidad(cantidad + 1) : alert("No se pueden agregar más productos")
        } else {
            alert("Producto sin stock, no se puede agregar al carrito.")
        }
        
    }

    const restar = () => {
        cantidad  > 1 ? setCantidad(cantidad - 1) : alert("No se pueden eliminar más productos")
    }

    
    return (
        <div className="w-100 mx-auto  text-center p-1">
            <div className="d-flex justify-content-evenly align-items-center botonera">
                <button className="btn btn-count" onClick={restar}>-</button>
                <p className="count p-0 m-0">{cantidad}</p>
                <button className="btn btn-count" onClick={sumar}>+</button>
            </div>
            <button className="mt-3 w-75 mx-auto btn  btn-cart" onClick={()=> {onAdd(cantidad)}}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;