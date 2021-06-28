import {actionTypes} from "../actions/actionTypes";

const Storage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems : []));
}
export const sumItems = cartItems => {
    Storage(cartItems);
    let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
    let total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    /*let getCurrentUser = AuthService.getCurrentUser();
    if (getCurrentUser) {
        let cart_items = cartItems.map(item => {
            let o = Object.assign({}, item);
            return {
                item_id: o._id,
                ItemName: o.title,
                ImageName: o.image,
                ItemPrice: o.price,
                ItemDiscount: o.discount,
                ShippingCost: o.ShippingCost,
                Quantity: o.quantity,
                TotalPrice: total
            };
        })
        const cartRequestPayload = {
            UserId: getCurrentUser._id,
            Items: cart_items
        }
        addUpdateCart(cartRequestPayload).then(response => {
            console.log('response', response);
        })
    }*/
    return {itemCount, total}
}
export const CartReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            if (!state.cartItems.find(item => item.id === action.payload.id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case actionTypes.REMOVE_ITEM:
            return {
                ...state,
                ...sumItems(state.cartItems.filter(item => item.id !== action.payload.id)),
                cartItems: [...state.cartItems.filter(item => item.id !== action.payload.id)]
            }
        case actionTypes.INCREASE:
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity++
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case actionTypes.DECREASE:
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity--
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case actionTypes.CHECKOUT:
            return {
                cartItems: [],
                checkout: true,
                ...sumItems([]),
            }
        case actionTypes.CLEAR:
            return {
                cartItems: [],
                ...sumItems([]),
            }
        default:
            return state
    }
}
