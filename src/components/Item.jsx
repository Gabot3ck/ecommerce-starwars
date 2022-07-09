import "./Item.css"
import { Link } from "react-router-dom";

function Item({product}) {
    const {titulo,image,id} = product
    
    return(
        <>
        <div className="col-12 col-sm-6 col-md-4  col-lg-3 d-flex justify-content-center">
            <div className="card mx-2 mb-4 mt-1 " >
                <img src={image} className="card-img-top imagen mx-auto img-fluid" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <Link to={`/item/${id}`} class="btn btn-primary">Abrir</Link>
                </div> 
            </div>
        </div>
        
        </>
    ) 

}
export default Item;