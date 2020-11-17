export const initialState = {
	cart: [],
	user: null,
};

export const getBasketTotal = (Cart) => {
	return Cart?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_CART":
			return {
				...state,
				cart: [...action.cart],
			};
		case "REMOVE_FROM_CART":
			return {
				...state,
				cart: [...action.cart],
			};
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
};

export default reducer;
