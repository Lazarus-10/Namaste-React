import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "url:../assets/img/Logo.png";


const loggedInUser = () => {
	// API call to check authentication
	return false;
}

//Routing - 1) Client-Side Routing, 2) Server Side Routing(calls the server and brings the page)
export const Title = () => (
	<a href="/">
		<img
			className="logo"
			alt="Logo"
			// src="https://shorturl.at/QQD8z"
			src={Logo}
		/>
	</a>
);

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<div className="header">
			<Title />
			<div className="nav-items">
				<ul>
					<Link to="/"> <li>Home</li> </Link>
					<Link to="/about"> <li>About</li> </Link>
					<Link to="/contact"> <li>Contact</li> </Link>
					<Link to="/cart"> <li>Cart</li> </Link>
				</ul>
			</div>
			{isLoggedIn ? (
				<button onClick={() => setIsLoggedIn(false)}>Logout</button>
			): (
				<button onClick={() => setIsLoggedIn(true)}>Login</button>
			)}
		</div>
	);
};
export default Header;