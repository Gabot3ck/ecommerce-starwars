
const ItemCount = ({count, setCount, stock, onAdd})=> {
    

    const sumar = () => {
        if(stock > 0 ){
            count < stock ? setCount(count + 1) : alert("No se pueden agregar más productos")
        } else {
            alert("Producto sin stock, no se puede agregar al carrito.")
        }
        
    }

    const restar = () => {
        count  > 1 ? setCount(count - 1) : alert("No se pueden eliminar más productos")
    }

    
    return (
        <div className="w-100 mx-auto  text-center p-1">
            <h2 className="">{count}</h2>
            <div className="d-flex justify-content-center align-items-center ">
                <button className="btn btn-secondary" onClick={restar}>-</button>
                <button className="my-3 mx-2 btn btn-primary" onClick={()=> {onAdd(count)}}>Agregar al carrito</button>
                <button className="btn btn-secondary" onClick={sumar}>+</button>
            </div>
            <br />
        </div>
    )
}

export default ItemCount;