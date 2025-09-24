import { createContext, useContext } from "react";

const CartContext = createContext(undefined);

export const CartProvider = ({children}) => {
    const state = useCart()

    return (
        <CartContext.Provider value={state}>
            {children}
        </CartContext.Provider>

    )
}

export const useCartContext = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error(
            'useCartContext must be used within a CartProvider'
        )
    }
    return context;S
}