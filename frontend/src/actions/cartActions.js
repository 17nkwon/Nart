import Axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

// when defining a function return an async function
// dispatch and getState are functions in Redux Func that make it possible to dispatch an action and get access to the state of the Redux Store
export const addToCart = productId => async (dispatch, getState) => {
    // send an ajax request to the server to get information about the product
    const { data } = await Axios.get(`/api/products/${productId}`);
    // data is the product
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            product: data.id
        }
    });
    // prevent refreshing from resetting cart
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = productId => (dispatch, getState) => {
    dispatchEvent({ type: CART_REMOVE_ITEM, payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}