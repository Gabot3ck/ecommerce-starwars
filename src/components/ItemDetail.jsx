import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
    const { nombre, apellido, image, precio, descripcion, stock } = item;

    const onAdd = (count) => {
    alert(`Acabas de agregar ${count} productos a tu carrito de compras`);
    };

    return (
        <div className="card mx-auto w-50 mb-5">
            <img src={image} className="card-img-top imagen mx-auto img-fluid w-50" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{nombre} {apellido}</h5>
                <h6 className="card-subtitle mb-2  text-danger ">Precio: {precio}</h6>
                <p className="card-text">{descripcion}</p>
                <a href="/" className="btn btn-primary">Comprar</a>
                <ItemCount initial={1} max={stock} onAdd={onAdd} />
            </div>
        </div>
    );
}

export default ItemDetail;