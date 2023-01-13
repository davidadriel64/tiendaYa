import React, {useState, createContext} from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some(x => x.id === id)
    }

    const addItem = (producto, quantity) => {
        if(isInCart(producto.id)) {
            let pos = cart.findIndex(x => x.id === producto.id)
            cart[pos].quantity += quantity
            setCart([...cart])
        } else {
            setCart([...cart, {...producto, quantity: quantity}])
        }
    }

    const removeItem = (id) => {
        const products = cart.filter(x => x.id !== id)
        setCart([...products])
    }

    const clear = () => {
        setCart([])
    }

    const cartTotal = () => {
        return cart.reduce((total, producto) => total += producto.quantity, 0)
    }

    const sumTotal = () => {
        return cart.reduce((total, producto) => total += producto.quantity * producto.precio, 0)
    }


    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal, sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider