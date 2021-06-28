import React, {createContext, useReducer} from 'react';
import {CartReducer, sumItems} from './CartReducer';
import {actionTypes} from "../actions/actionTypes";

export const CartContext = createContext()
const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const initialState = {cartItems: storage, ...sumItems(storage), checkout: false};
const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, initialState)
    const increase = payload => {
        dispatch({type: actionTypes.INCREASE, payload})
    }
    const decrease = payload => {
        dispatch({type: actionTypes.DECREASE, payload})
    }
    const addProduct = payload => {
        dispatch({type: actionTypes.ADD_ITEM, payload})
    }
    const removeProduct = payload => {
        dispatch({type: actionTypes.REMOVE_ITEM, payload})
    }
    const clearCart = () => {
        dispatch({type: actionTypes.CLEAR})
    }
    const handleCheckout = () => {
        console.log(actionTypes.CHECKOUT, state);
        dispatch({type: actionTypes.CHECKOUT})
    }
    const contextValues = {
        removeProduct,
        addProduct,
        increase,
        decrease,
        clearCart,
        handleCheckout,
        ...state
    }
    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;
