import React from "react";
import Product from "../Product/Product";
import "./Home.css";
function Home() {
	return (
		<div className="home">
			<div className="home_row">
				<Product
					id="21212333"
					title="Product 1"
					price={29.99}
					image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
					rating={5}
				/>
				<Product
					id="98745632"
					title="Product 2"
					price={299}
					image="https://images-na.ssl-images-amazon.com/images/I/51slqM2g3jL._SX329_BO1,204,203,200_.jpg"
					rating={5}
				/>
				<Product
					id="21222333"
					title="Product 3"
					price={29.99}
					image="https://images-na.ssl-images-amazon.com/images/I/41+eK8zBwQL._SY344_BO1,204,203,200_.jpg"
					rating={5}
				/>
			</div>
			<div className="home_row">
				<Product
					id="21366633"
					title="Product 4"
					// eslint-disable-next-line no-sequences
					price={59999}
					image="https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SL1500_.jpg"
					rating={4}
				/>
				<Product
					id="21378433"
					title="Product 5"
					// eslint-disable-next-line no-sequences
					price={10999}
					image="https://images-na.ssl-images-amazon.com/images/I/81mtDLql%2BXL._SL1500_.jpg"
					rating={4}
				/>
				<Product
					id="21786733"
					title="Product 6"
					price={23999}
					image="https://images-na.ssl-images-amazon.com/images/I/41D9NDiSzjL._SL1024_.jpg"
					rating={5}
				/>
				<Product
					id="21876633"
					title="Product 7"
					price={9999}
					image="https://images-na.ssl-images-amazon.com/images/I/710qEb8G3gL._SL1500_.jpg"
					rating={5}
				/>
				<Product
					id="21098733"
					title="Product 8"
					price={8999}
					image="https://images-na.ssl-images-amazon.com/images/I/81aWatlQCvL._SL1500_.jpg"
					rating={5}
				/>
			</div>
			<div className="home_row">
				<Product
					id="21456733"
					title="Product 9"
					price={42990}
					image="https://images-na.ssl-images-amazon.com/images/I/71MW1E0je-L._SL1200_.jpg"
					rating={5}
				/>
				<Product
					id="21444733"
					title="Product 10"
					price={42990}
					image="https://images-na.ssl-images-amazon.com/images/I/712NGnu3beL._SL1500_.jpg"
					rating={5}
				/>
			</div>
		</div>
	);
}

export default Home;
