import {createContext, useState} from 'react'


export  const MiContext = createContext({});


export default function CartContext( {children} ) {
    const [cart, setCart] = useState([]);
    
    const isInCart = (id) => {
        //return cart.some(item => item.id === id)
        return cart.findIndex(item => item.id === id)
    }

    const addItem = (item, cantidad) => {
        let posicion = isInCart(item.id)

        if(posicion === -1){
            setCart([...cart,{...item,cantidad:cantidad}])
        } else {
            let auxCartCopy = [...cart]
            auxCartCopy[posicion].cantidad = auxCartCopy[posicion].cantidad + cantidad
            setCart(auxCartCopy)
        }
    }

    const removeItem = (id) => {
        return setCart(cart.filter(item => item.id !== id))
    }
    

    const clear = () => {
        setCart([]);
    }

    const enviarCant = () => {
        return  cart.reduce((acc,item) => acc += item.cantidad, 0)
    }

    const removeCant = () => {
        setCart([]);
    }

    const precioTotal = () => {
        return cart.reduce((acc,item) => acc += item.cantidad * item.precio, 0) 
    }


    return (<>
        <MiContext.Provider value={{cart, isInCart, addItem, removeItem, clear, enviarCant, precioTotal, removeCant}}>
            {children}
        </MiContext.Provider>
    </>)
}
