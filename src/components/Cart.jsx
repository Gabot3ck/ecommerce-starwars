import React, { useContext } from 'react'
import { MiContext } from '../contexts/CartContext'


export default function Cart() {

    const {cart,clear,removeItem} = useContext(MiContext)
    console.log(cart)
    return (<>
        <div className='container mt-2 mb-4 w-100 bg-success p-2 text-center'>
            <button onClick={()=> clear()} className="btn btn-danger" >Vaciar Carrito</button>
            {
                cart.length > 0
                ? cart.map((el, index) => {
                    return(<>
                        <div className='d-flex mx-auto bg-primary w-50 my-3 p-3' key={index}>
                            <div className='d-flex flex-column w-75'> 
                                <img src={el.image} className="card-img-top imagen mx-auto img-fluid w-50" alt="..."></img>
                                <h3 className='text-center'> {el.titulo}</h3>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center bg-warning '>
                                <p className=''>Cantidad:{el.cantidad}</p>
                                <button onClick={()=> removeItem(el.id)} className="btn btn-danger" >Eliminar</button>
                            </div>
                        </div>
                        
                    </>) 
                })
                :  <h1> Elemento vacío </h1>  
            }
        </div>
    </>)
}
