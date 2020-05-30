export const ADD_TO_CART = 'ADD_TO_CART'
export const ADD_QUANTITY = 'ADD_QUANTITY'
export const SUBTRACT_QUANTITY = 'SUBTRACT_QUANTITY'
export const REMOVE_ITEM = 'REMOVE_ITEM'

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}

export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        payload: id
    }
}

export const subtractQuantity = (id) => {
    return {
        type: SUBTRACT_QUANTITY,
        payload: id
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id
    }
}