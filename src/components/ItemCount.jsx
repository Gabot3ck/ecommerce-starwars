import { useState } from "react";

const ItemCount = ({initial, max, onAdd})=> {
    const [count, setCount] = useState(initial)

    const sumar = () => {
        if(max > 0 ){
            count < max ? setCount(count + 1) : alert("No se pueden agregar más productos")
        } else {
            alert("Producto sin stock, no se puede agregar al carrito.")
        }
        
    }

    const restar = () => {
        count  > initial ? setCount(count - 1) : alert("No se pueden eliminar más productos")
    }

    const reset = () => {
        setCount(initial)
    }
    
    return (
        <div className="w-100 mx-auto  text-center p-1">
            <h2 className="">{count}</h2>
            <div className="d-flex justify-content-center align-items-center ">
                <button className="btn btn-secondary" onClick={restar}>-</button>
                <button className="my-3 mx-2 btn btn-primary" onClick={()=> {onAdd(count); reset()}}>Agregar al carrito</button>
                <button className="btn btn-secondary" onClick={sumar}>+</button>
            </div>
            <br />
            <button className="btn btn-danger" onClick={reset}>Reset</button>
        </div>
    )
}

export default ItemCount;