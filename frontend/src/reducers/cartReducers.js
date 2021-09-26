import { CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            // get item from payload that we want to add to cart
            const item = action.payload;
            // check if product is already in cart
            const existItem = state.cartItems.find(x => x.product === item.product);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                };
            } else {
                // concatenate cart items with the new item
                return { ...state, cartItems: [...state.cartItems, item] };
            }
        default:
            return state;
    }
}