import "./Item.css"

function Item({product}) {
    const {nombre,apellido,image} = product
    
    return(
        <>
        <div className="card" >
            <img src={image} className="card-img-top imagen mx-auto img-fluid" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{nombre} {apellido}</h5>
            </div>
        </div>
        </>
    ) 

}
export default Item;