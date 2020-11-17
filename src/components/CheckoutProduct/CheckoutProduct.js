import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../../StateProvider";
import { db } from "../../firebase";
function CheckoutProduct({ id, image, title, price, rating }) {
	const [{ cart, user }, dispatch] = useStateValue();

	const removeFromCart = () => {
		const index = cart.findIndex((cartItem) => cartItem.id === id);
		let newCart = [...cart];

		if (index >= 0) {
			newCart.splice(index, 1);
			db.collection("users").doc(user?.uid).set({
				cart: newCart,
			});
		} else {
			alert(`Cant remove item (id: ${id}) as its not in cart!!`);
		}

		dispatch({
			type: "SET_CART",
			cart: newCart,
		});
	};
	return (
		<div className="checkoutProduct">
			<img src={image} alt="" />
			<div className="checkoutProduct_info">
				<p className="checkoutProduct_title">{title}</p>
				<p className="checkoutProduct_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct_rating">
					{Array(rating)
						.fill()
						.map((_, i) => {
							return (
								<p>
									<StarIcon key="" style={{ fill: "#FCEC66" }} />
								</p>
							);
						})}
				</div>
				<button onClick={() => removeFromCart()}>Remove from Cart</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
