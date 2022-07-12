import "./Item.css"
import { Link } from "react-router-dom";

function Item({product}) {
    const {titulo,image,id,precio, stock} = product
    
    return(
        <>
        <div className="col-12 col-sm-6 col-md-4  col-lg-3 d-flex justify-content-center">
            <div className="card mx-2 mb-4 mt-1 card-item" >
                <img src={image} className="card-img-top imagen mx-auto" alt="..."></img>
                <div className="card-body bg-dark d-flex flex-column justify-content-between">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="precio-card">$CLP {precio}</p>
                    <Link to={`/item/${id}`} class="btn btn-warning">Ver detalles</Link>
                    <p className="stock-card p-0 m-0">Stock: {stock} uds.</p>
                </div> 
            </div>
        </div>
        
        </>
    ) 

}
export default Item;