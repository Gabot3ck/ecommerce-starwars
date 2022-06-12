function Item2({item2}) {
    const {nombre,apellido,image,precio, descripcion} = item2
    
    return(
        <>
        <div className="card" >
            <img src={image} className="card-img-top imagen mx-auto img-fluid w-75" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{nombre} {apellido}</h5>
                <h6 className="card-subtitle mb-2  text-danger ">Precio: {precio}</h6>
                <p className="card-text">{descripcion}</p>
                <a href="/" className="btn btn-primary">Comprar</a>
            </div>
        </div>
        </>
    ) 

}
export default Item2;