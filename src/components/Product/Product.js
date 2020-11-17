import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../../StateProvider";
import { db } from "../../firebase";
function Product({ id, title, image, price, rating }) {
	const [{ user, cart }, dispatch] = useStateValue();
	const addToCart = () => {
		let add = [
			...cart,
			{
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		];

		db.collection("users").doc(user?.uid).set({
			cart: add,
		});
		dispatch({
			type: "SET_CART",
			cart: add,
		});
	};

	return (
		<div className="product">
			<div className="product_info">
				<p>{title}</p>
				<p className="product_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product_rating">
					{Array(rating)
						.fill()
						.map((_, i) => {
							return (
								<p>
									<StarIcon style={{ fill: "#FCEC66" }} />
								</p>
							);
						})}
				</div>
			</div>
			<img src={image} alt="" />
			<button onClick={() => addToCart()}>Add to Cart</button>
		</div>
	);
}
export default Product;
