import PhoneInput from 'react-phone-number-input'
import { useContext, useState, useEffect } from "react";
import { MiContext } from "../contexts/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Spinner from './Spinner';
import {Link} from 'react-router-dom';
import './Checkout.css';
import 'react-phone-number-input/style.css'



export default function Checkout() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cell, setCell] = useState('');
    const [idCompra, setIdCompra] = useState("");
    const {cart, precioTotal, removeCant} = useContext(MiContext);

    const [detalles, setDetalles] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    
    const [mensajeEmail, setMensajeEmail] = useState("");
    const [mensajeName, setMensajeName] = useState("");
    const [mensajeCelu, setMensajeCelu] = useState("");

    const [activeName, setActiveName] = useState(false);
    const [activeCell, setActiveCell] = useState(false);
    const [activeEmail, setActiveEmail] = useState(false);
    const [btnDisable, setBtnDisable] = useState(true);

    const db = getFirestore();
    const orderCollection = collection(db,"orders");


    function handleClick(){
        setDetalles(false)

        const date = new Date();
        const total = precioTotal();

        const order = {
            buyer: {name, email, cell},
            items: cart,
            date ,
            total
        }

        addDoc(orderCollection, order).then(({id}) => {
            setIdCompra(id)
            setIsLoading(false)
        })
    }


    function validateEmail(e) {
        const valueEmail = e.target.value;
        const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        switch(valueEmail.length > 0){
    
            case(valueEmail !== ""):
                if (e.target.type === "email") {
                
                    if (er.test(e.target.value)) {
                        setMensajeEmail("");
                        setActiveEmail(true)
    
                    } else {
                        setActiveEmail(false)
                        setMensajeEmail("Debe ingresar un email válido")
                    }
                }
                break;
            
            default:
                setActiveEmail(false)
                setMensajeEmail("Debe ingresar un email válido");
        }
    }

    function validateName(e){
        const value = e.target.value;
        const regName = /^[a-zA-ZÀ-ÿ]{1,40}\s[a-zA-ZÀ-ÿ]{1,40}$/ ;

        if(value !== ""){
            if(!regName.test(e.target.value)){
                setActiveName(false);
                setMensajeName("Solo se permiten letras");
            } else {
                setActiveName(true)
                setMensajeName("");
            }
        } else {
            setActiveName(false);
            setMensajeName("Debe ingresar su nombre y apellido");
        }
    }

    function validateCelu(e){
        const value = e.target.value;
        const regCell = /[9]\s[0-9]{4}\s[0-9]{4}/
        if(value !== ""){
            if(!regCell.test(e.target.value)){
                setActiveCell(false);
                setMensajeCelu("Ingrese un número de celular válido");
            } else {
                setActiveCell(true);
                setMensajeCelu("");
            }
        } else {
            setActiveCell(false);
            setMensajeCelu("Debe ingresar su número de celular")
        }
    }


    useEffect(() => {

        const handleDOMLoaded = () => setBtnDisable(true)

        if((activeName === false) || (activeCell === false) || (activeEmail === false) ) {
            window.addEventListener('DOMContentLoaded', handleDOMLoaded);
            setBtnDisable(true);
        } else {
            window.removeEventListener('DOMContentLoaded', handleDOMLoaded)
            setBtnDisable(false)
        }
        return () => window.removeEventListener('DOMContentLoaded', handleDOMLoaded);
    }, [name, cell, email, activeName, activeCell, activeEmail]);

    const handleSubmit = event => {
        event.preventDefault();
    }


    return (<>
        <section className="container mt-4 mb-4 w-75  py-2 px-4 text-center rounded-5 contenedor_cart">
            <h2 className="text-center text-white">Resumen de compra</h2>
            <div  className="w-100 mx-auto  my-5 p-3 rounded-3  wrapper_compra">
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

                <form className="mx-3 w-50 rounded-4 formulario" onSubmit={handleSubmit}>
                    <h5 className='my-4 text-center'>Ingrese sus datos personales</h5>

                    {/* Validación de Nombre */}
                    <label className='d-block text-start mx-3' htmlFor="nombre"  id="labelNombre" >Nombre y apellido:</label>
                    <i className="bi bi-arrow-right me-2 " id="icon1"></i>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        onBlur={validateName}
                        className="form-input" 
                        name="nombre" 
                        id="nombre" 
                        type="text"
                        autoComplete='off'
                    />
                    <span className='alerta p-0 ms-5 ps-2'>{mensajeName !== "" ? mensajeName : ""}</span>

                    {/* Validación de Celular */}
                    <label className='d-block text-start mx-3' htmlFor="celular"  
                    id="labelCelular" >Celular:</label>
                    <i className="bi bi-arrow-right me-3 " id="icon2"></i>
                    <PhoneInput
                        className='form-input'
                        defaultCountry="CL"
                        onChange={setCell}
                        value={cell}
                        name="celular" 
                        id="celular" 
                        type="cell"  
                        maxLength="11"
                        autoComplete='off'
                        onBlur={validateCelu}
                    />
                    <span className='alerta p-0 ms-5 ps-2'>{mensajeCelu !== "" ? mensajeCelu : ""}</span>


                    {/* Validación de Email */}
                    <label className='d-block text-start mx-3' htmlFor="email" 
                    id="labelEmail" >Email:</label>
                    <i className="bi bi-arrow-right me-2 " id="icon3"></i>
                    <input 
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={validateEmail}
                        className="form-input" 
                        name="email" 
                        id='email' 
                        type="email"
                        autoComplete='off'
                    />
                    <span className='alerta p-0 ms-5 ps-2'>{mensajeEmail !== "" ? mensajeEmail : ""}</span>

                    <button 
                        className={`btn btn-warning btn-warning-form ${btnDisable ? "bloqueado" : ""} `}
                        onClick={() => {handleClick() ; removeCant()}} 
                        type="submit"
                        disabled={btnDisable}>
                        Terminar compra
                    </button>
                    <br/>
                </form>
            </>
            }

            { detalles === false &&
            <>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    {isLoading ? 
                    <Spinner /> : 
                    <>
                        <div>
                        <p className="text-white">Su orden se realizó correctamente con el código:</p> <br/>
                            <i className="bi bi-check-circle"></i>
                            <h3 className="mt-3">{idCompra}</h3>
                            <Link to={`/`} class="btn btn-warning mt-3 w-50">Ir al inicio</Link>
                        </div>
                        
                    </>}
                </div>
                
            </>
            }
            </div>
        </section>
        
    </>)
}
