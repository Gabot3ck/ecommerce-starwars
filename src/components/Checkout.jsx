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
        <section className="w-75 mx-auto bg-success my-5 p-3 rounded-3">
            <h4 className="text-center">Resumen de compra</h4>
            <div  className="w-100 mx-auto bg-warning my-5 p-3 rounded-3 d-flex align-items-center justify-content-evenly">
            { detalles === true && 
            <>
                <div className=" bg-primary h-100 mx-3 w-50">
                    <h5>Productos</h5>
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
                        <p>importe final:  </p>
                        <p>CLP$ {precioTotal()}</p>
                    </div>
                    
                </div>
                <div className=" bg-primary h-100 mx-3 w-50">
                    <input onChange={(e) => setName (e.target.value)} placeholder="Ingrese nombre"></input> <br/>
                    <input onChange={(e) => setEmail (e.target.value)} placeholder="Ingrese cel"></input> <br/>
                    <input onChange={(e) => setCel (e.target.value)} placeholder="Ingrese email"></input> <br/> <br/>
                    <button onClick={() => handleClick()}>Terminar compra</button> <br/>
                </div>
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
