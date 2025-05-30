import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Cart from "./components/Cart.jsx";
import About from "./components/About.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Profile from "./components/ProfileClass.jsx";
import ProfileFunctionalComp from "./components/Profile.jsx";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

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
const appRouter = createBrowserRouter([
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
				children : [
					{
						path: "profile", // parentPath/{path} => localhost:1234/about/profile
						element: <Profile /> //childrens are rendered in parent comp outlet, so we would need an outlet in about comp
					}
				]
			},
			{
				path: "/contact", // "/" means from root (locahost:1234), so here both will work /contact as well as contact
				element: <Contact />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
			{
				path: "/restaurant/:id",
				element: <RestaurantMenu />
			}
		],
	}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
