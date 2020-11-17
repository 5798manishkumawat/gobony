import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function Header() {
	const [{ cart, user }, dispatch] = useStateValue();
	const history = useHistory();
	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
			history.push("/");
		}
	};

	return (
		<div className="header">
			<Link to="/home">
				<h1 className="header_name">GoBony</h1>
			</Link>

			<div className="header_nav">
				<Link to={!user && "/"}>
					<div onClick={handleAuthentication} className="header_option">
						<span className="header_optionLineOne">Hello {user?.email}</span>
						<span className="header_optionLineTwo">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>
				<Link to="/checkout">
					<div className="header_optionBasket">
						<ShoppingCartIcon className="" />
						<span className="header_optionLineTwo header_basketCount">
							{cart.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
