import { useState } from "react";

const ItemCount = ({initial, max, onAdd})=> {
    const [count, setCount] = useState(initial)

    const sumar = () => {
        count < max ? setCount(count + 1) : alert("No se pueden agregar más productos")
    }

    const restar = () => {
        count  > initial ? setCount(count - 1) : alert("No se pueden eliminar más productos")
    }

    const reset = () => {
        setCount(initial)
    }
    
    return (
        <div className="w-50 mx-auto  text-center p-4">
            <h2 className="">{count}</h2>
            <button className="btn btn-secondary" onClick={restar}>-</button>
            <button className="my-3 mx-2 btn btn-primary" onClick={()=> {onAdd(count); reset()}}>Agregar al carrito</button>
            <button className="btn btn-secondary" onClick={sumar}>+</button>
            <br />
            <button className="btn btn-danger" onClick={reset}>Reset</button>
        </div>
    )
}

export default ItemCount;