import React, { useContext } from 'react'
import { MiContext } from '../contexts/CartContext'
import "./Cart.css";
import {Link} from "react-router-dom";


export default function Cart() {

    const {cart,clear,removeItem,precioTotal} = useContext(MiContext)
    return (<>
        <div className='container mt-4 mb-4 w-75 bg-success p-2 text-center rounded-5'>
            <h4>Mi Carrito</h4>
            { cart.length > 0 && 
                <>
                    <div className='bg-white m-4 p-2 rounded-4 contenedor__detalles'>
                        <p className='titulo'>Producto</p>
                        <p className='tituloUni'>Precio unitario</p>
                        <p className='tituloTot'>Precio total</p>
                        {cart.map((el, index) => {
                            return(<>
                                <div className='w-100 bg-primary w-50  rounded-3 item' key={index}>
                                    <div className='detalle__producto w-100'> 
                                        <img src={el.image} className="card-img-top my-2 mx-auto img-fluid w-50 foto rounded-2" alt="..."></img>
                                        <p className='text-center producto'> {el.titulo} x {el.cantidad} </p>
                                        <p className='precioUni'>CLP ${el.precio}</p>
                                        <p className='precioTot'>CLP ${parseFloat(el.precio) * el.cantidad}</p>
                                        <button onClick={()=> removeItem(el.id)} className="btn btn-danger eliminar" ><i class="bi bi-trash3"></i></button>
                                    </div>
                                </div>
                            </>) 
                        })}
                    </div>
                    <div className='bg-warning m-4 p-3 rounded-3'>
                        <h5>Total a pagar: CLP $ {precioTotal()}</h5>
                        <div className='mt-4'>
                            <button className="btn btn-danger me-3">Finalizar compra</button>
                            <button onClick={()=> clear()} className="btn-vaciar" >Vaciar Carrito</button>
                        </div>
                    </div>
                </>
            }
            {!cart.length > 0 && 
                <>
                    <i class="bi bi-cart3"></i>
                    <h1> Su carrito está vacío </h1>
                    <Link className="btn btn-danger my-3" to={"/"}>Ir a tienda</Link>
                </>
                
            }
        </div>
    </>)
}