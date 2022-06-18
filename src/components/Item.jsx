import "./Item.css"

function Item({product}) {
    const {titulo,image} = product
    
    return(
        <>
        <div className="card mx-2 mb-4 mt-1" >
            <img src={image} className="card-img-top imagen mx-auto img-fluid" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
            </div> 
        </div>
        </>
    ) 

}
export default Item;