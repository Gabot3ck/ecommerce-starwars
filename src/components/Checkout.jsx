import './Checkout.css';
import { useContext, useState } from "react";
import { MiContext } from "../contexts/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";


export default function Checkout() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cel, setCel] = useState('');
    const [detalles, setDetalles] = useState(true);
    const [idCompra, setIdCompra] = useState("");
    const {cart, precioTotal} = useContext(MiContext);

    const db = getFirestore();
    const orderCollection = collection(db,"orders");


    function handleClick(){
        setDetalles(false)

        const date = new Date();
        const total = precioTotal();

        const order = {
            buyer: {name, email, cel},
            items: cart,
            date ,
            total
        }

        addDoc(orderCollection, order).then(({id}) => {
            setIdCompra(id)
        })
    }

    return (<>
        <section className="container mt-4 mb-4 w-75  py-2 px-4 text-center rounded-5 contenedor_cart">
            <h2 className="text-center">Resumen de compra</h2>
            <div  className="w-100 mx-auto  my-5 p-3 rounded-3 d-flex align-items-center justify-content-evenly">
            { detalles === true && 
            <>
                <div className="mx-3 px-2 w-50 rounded-4 detalles_checkout">
                    <h5 className='mt-4 text-center'>Productos</h5>
                    {cart.map((el, index) => {
                        return(<>
                            <div className="mx-3 my-4 d-flex" key={index}>
                                <img src={el.image} className="image" alt="..."></img>
                                <div className="detalles ms-3">
                                    <p>{el.cantidad} x {el.titulo}</p>
                                    <p>{el.cantidad} x CLP$ {el.precio} = CLP$ {el.cantidad * el.precio}</p>

                                </div>
                            </div>
                        </>)
                    })}
                    <hr/>
                    <div className="d-flex justify-content-around">
                        <p className="precio_final">Importe final:  </p>
                        <p className="precio_final">CLP$ {precioTotal()}</p>
                    </div>
                    
                </div>
                <form className="mx-3 w-50 rounded-4 formulario">
                    <h5 className='my-4 text-center'>Ingrese sus datos personales</h5>
                    <label className='d-block text-start mx-3' for="nombre" id="labelNombre" >Nombre y apellido:</label>
                    <i className="bi bi-arrow-right me-2 " id="icon1"></i>
                    <input onChange={(e) => setName (e.target.value)} className="form-input"  id="nombre" autofocus></input> <br/>
                    <label className='d-block text-start mx-3' for="celular" id="labelEmail" >Celular:</label>
                    <i className="bi bi-arrow-right me-2 " id="icon2"></i>
                    <input onChange={(e) => setEmail (e.target.value)} className="form-input" id="celular"  maxLength="11"></input> <br/>
                    <label className='d-block text-start mx-3' for="email" id="labelEmail" >Email:</label>
                    <i className="bi bi-arrow-right me-2 " id="icon3"></i>
                    <input onChange={(e) => setCel (e.target.value)} className="form-input" id='email'></input> <br/> <br/>
                    <button className='btn btn-warning w-50' onClick={() => handleClick()}>Terminar compra</button> <br/>
                </form>
            </>
            }
            { detalles === false &&
            <>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <p>Su orden se realizó correctamente con el código:</p> <br/>
                    <h4>{idCompra}</h4>
                </div>
                
            </>
            }
            </div>
        </section>
        
    </>)
}
