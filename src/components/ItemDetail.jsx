import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {MiContext} from "../contexts/CartContext";

function ItemDetail({ item }) {
    const { titulo, image, stock, precio, id } = item;

    const [mostrar, setMostrar] = useState(true);

    const {isInCart, addItem} = useContext(MiContext);

    const onAdd = (cantidad) => {
        setMostrar(false);
        isInCart(id);
        addItem(item, cantidad);
    };

    return (<>
        <div className="card mx-auto w-25 mb-5 mt-5">
        <img src={image} className="card-img-top imagen mx-auto img-fluid w-50" alt="..."></img>
        <div className="card-body text-center">
            <h5 className="card-title">{titulo}</h5>
            <h6 className="card-subtitle mb-2  text-danger ">Precio: $CLP {precio}</h6>
            { mostrar ? <ItemCount item={item} stock={stock} onAdd={onAdd} initial={1}/> : <Link to={`/cart`} class="btn btn-primary">Terminar mi compra</Link>}
        </div>
    </div>
    
    </>);

}

export default ItemDetail;