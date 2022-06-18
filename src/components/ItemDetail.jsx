import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
    const { titulo, image, stock, precio } = item;

    const onAdd = (count) => {
    alert(`Acabas de agregar ${count} productos a tu carrito de compras`);
    };

    return (
        <div className="card mx-auto w-25 mb-5 mt-5">
            <img src={image} className="card-img-top imagen mx-auto img-fluid w-50" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <h6 className="card-subtitle mb-2  text-danger ">Precio: $CLP {precio}</h6>
                <a href="/" className="btn btn-primary">Comprar</a>
                <ItemCount initial={1} max={stock} onAdd={onAdd} />
            </div>
        </div>
    );
}

export default ItemDetail;