import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { auth, db } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
	// eslint-disable-next-line no-empty-pattern
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			//console.log(authUser);
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});

				db.collection("users")
					.doc(authUser?.uid)
					.get()
					.then(function (doc) {
						if (doc.exists) {
							dispatch({
								type: "SET_CART",
								cart: doc.data().cart,
							});
							console.log("Document data:", doc.data().cart);
						} else {
							// doc.data() will be undefined in this case
							console.log("No such document!");
						}
					})
					.catch(function (error) {
						console.log("Error getting document:", error);
					});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/home">
						<Header />
						<Home />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/">
						<Login />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
