import React from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "./Checkout.css";

function Checkout() {
	// eslint-disable-next-line no-unused-vars
	const [{ cart, user }, dispatch] = useStateValue();
	return (
		<div className="checkout">
			<h3>Hello, {user?.email}</h3>
			<h2 className="checkout_title">Your Shopping Basket</h2>
			{cart?.map((item) => {
				return (
					<CheckoutProduct
						key={item.id}
						id={item.id}
						image={item.image}
						price={item.price}
						title={item.title}
						rating={item.rating}
					/>
				);
			})}
		</div>
	);
}

export default Checkout;
