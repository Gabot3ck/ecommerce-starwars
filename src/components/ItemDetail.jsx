import ItemCount from "./ItemCount";
import {useState} from "react";
import {Link} from 'react-router-dom';

function ItemDetail({ item }) {
    const { titulo, image, stock, precio } = item;

    const [cantidad, setCantidad] = useState(1);
    const [mostrar, setMostrar] = useState(true);

    const onAdd = (count) => {
        alert(`Acabas de agregar ${count} productos a tu carrito de compras`);
        setMostrar(false);
    };

    return (<>
        <div className="card mx-auto w-25 mb-5 mt-5">
        <img src={image} className="card-img-top imagen mx-auto img-fluid w-50" alt="..."></img>
        <div className="card-body text-center">
            <h5 className="card-title">{titulo}</h5>
            <h6 className="card-subtitle mb-2  text-danger ">Precio: $CLP {precio}</h6>
            { mostrar ? <ItemCount  stock={stock} onAdd={onAdd} count={cantidad} setCount={setCantidad}/> : <Link to={`/cart`} class="btn btn-primary">Ir a carrito</Link>}
        </div>
    </div>
    
    </>);

    
}

export default ItemDetail;