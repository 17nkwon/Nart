import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

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
        case CART_REMOVE_ITEM:
            // filter out the products with the matching ids in action.payload
            return { ...state, cartItems: state.cartItems.filter(x => x.product !== action.payload) }
        default:
            return state;
    }
}