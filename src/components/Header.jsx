import { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "url:../assets/img/Logo.png";


const loggedInUser = () => {
	// API call to check authentication
	return false;
}

//Routing - 1) Client-Side Routing, 2) Server Side Routing(calls the server and brings the page)
export const Logo = () => (
	<a href="/">
		<img
			className="w-20"
			alt="Logo"
			// src="https://shorturl.at/QQD8z"
			src={LogoImage}
		/>
	</a>
);

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<div className="flex flex-col justify-between items-center bg-[#f8f9fa] shadow-lg rounded-b sm:flex-row sm:px-6 sm:py-2">
			<Logo />
			<div className="nav-items">
				<ul className="list-none flex flex-wrap gap-6 text-base text-[#333] transition-colors duration-500 ease-in-out">
					<li className="hover:text-blue-600 cursor-pointer"> <Link to="/"> Home </Link> </li>
					<li className="hover:text-blue-600 cursor-pointer"> <Link to="/about"> About </Link> </li>
					<li className="hover:text-blue-600 cursor-pointer"> <Link to="/contact"> Contact </Link> </li>
					<li className="hover:text-blue-600 cursor-pointer"> <Link to="/cart"> Cart </Link> </li>
					<li className="hover:text-blue-600 cursor-pointer"> <Link to="/instamart">Instamart</Link> </li>
				</ul>
			</div>
			{/* px-4 py-2 bg-blue-500 text-white font-medium rounded-lg cursor-pointer transition-colors duration-300 hover:bg-blue-700 */}
			{isLoggedIn ? (
				<button 
				onClick={() => setIsLoggedIn(false)}
				className="px-4 py-2 my-4 bg-blue-500 text-white font-medium rounded-lg cursor-pointer transition-colors duration-300 hover:bg-blue-700"
				>
					Logout
				</button>
			): (
				<button 
				onClick={() => setIsLoggedIn(true)}
				className="px-4 py-2 my-4 bg-blue-500 text-white font-medium rounded-lg cursor-pointer transition-colors duration-300 hover:bg-blue-700"
				>
					&nbsp;Login&nbsp;
				</button>
			)}
		</div>
	);
};
export default Header;