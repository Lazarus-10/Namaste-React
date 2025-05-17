import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact.jsx";
import Cart from "./components/Cart.jsx";
import About from "./components/About";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

const AppLayout = () => {
	return (
		<>
			<Header />
			{/* Fill Different pages filled in the outlet by router
			All childrens comes into outlet acc to route 
			this outlet will not be shown in html as it gets filled by the comp acc to route*/}
			<Outlet />
			<Footer />
		</>
	);
};

//creat this after AppLayout since it needs to be defined
const appAppRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <ErrorPage />, // Error boundary for this route and its children
		// /about, /about/xyz all are children of /, if not explicitly scoped otherwise
		//so any path that is not valid will show <ErrorPage />
		children: [
			{
				path: "",          // This represents the index (i.e., "/")
				element: <Body />
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/cart",
				element: <Cart />,
			}
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appAppRouter} />);
