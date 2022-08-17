import { Link } from "react-router-dom";
import imagen from "../img-error.png";
import "./Error.css";



export default function Error404() {
    return (<>
        <div className="wrapper_error">
            <h1>404</h1>
            <img src={imagen} alt="" />
            <p>La página que ha solicitado no se encuentra disponible</p>
            <div className="boton">
                <Link className="btn btn-error" to={"/"}>Volver atras</Link>
            </div>
        </div>
        
    </>)
}
