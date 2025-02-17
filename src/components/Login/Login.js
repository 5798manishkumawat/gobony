import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import React from "react";
import { auth } from "../../firebase";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/home");
			})
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		e.preventDefault();
		//firebase registration
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				//console.log(auth);
				if (auth) {
					history.push("/home");
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<h1>GoBony</h1>
			<div className="login_container">
				<h1>Sign-in</h1>
				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button type="submit" onClick={signIn} className="login_signInButton">
						Sign In
					</button>
				</form>
				<p>
					By signing-in, you agree to the GOBONY Conditions of Use and Privacy
					Notice.
				</p>
				<button onClick={register} className="login_registerButton">
					Create your GoBony Account
				</button>
			</div>
		</div>
	);
}

export default Login;
