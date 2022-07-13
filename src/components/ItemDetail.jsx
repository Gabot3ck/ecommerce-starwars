import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {MiContext} from "../contexts/CartContext";
import "./ItemDetail.css";

function ItemDetail({ item }) {
    const { titulo, image, stock, precio, id, descripcion} = item;

    const [mostrar, setMostrar] = useState(true);

    const {isInCart, addItem} = useContext(MiContext);

    const onAdd = (cantidad) => {
        setMostrar(false);
        isInCart(id);
        addItem(item, cantidad);
    };

    return (<>
        <div className="card mx-auto my-5 card-detail bg-dark">
            <img src={image} className="card-img-top mx-auto imagen-detail" alt="..."></img>
            <div className="card-body text-center">
                <p className="card-subtitle mb-2 ">$CLP {precio}</p>
                <h3 className="card-title title-detail">{titulo}</h3>
                <p className="descripcion p-0 my-3">{descripcion}</p>
                { mostrar ? 
                <ItemCount item={item} stock={stock} onAdd={onAdd} initial={1}/> : 
                <>
                    <Link to={`/cart`} class="btn btn-warning w-50">Ir a carrito</Link><br/>
                    <Link to={`/`} class="btn btn-second mt-3 w-50">Seguir comprando</Link>
                </>
                
                }
            </div>
        </div>
    </>);

}

export default ItemDetail;