import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Cart from "./components/Cart.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Profile from "./components/ProfileClass.jsx";
import MyShimmer from "./components/Shimmer.jsx";
import ProfileFunctionalComp from "./components/Profile.jsx";

import { BrowserRouter, createBrowserRouter, Outlet, Route, RouterProvider, Routes } from "react-router-dom";
import NoInternetPage from "./components/NoInternetPage.jsx";
import useOnlineStatus from "./utils/useOnlineStatus.js";
import { lazy, Suspense } from "react";

//component must have default export for lazy loading
const Instamart = lazy(() => import("./components/Instamart.jsx")); //this import is a function providing dynamic import by returning a promise that resolves to the component
const About = lazy(() => import("./components/About.jsx"));

const AppLayout = () => {
	if (!useOnlineStatus()) {
		return <NoInternetPage />;
	}

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

//old way(but looks easy)
const AppRouter2 = () => {
	
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Body />} />
          
          <Route path="about" element={<About />}>
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="contact" element={<Contact />} />
          
          <Route path="cart" element={<Cart />} />
          
          <Route path="restaurant/:id" element={<RestaurantMenu />} />
          
			 <Route path="*" element={<ErrorPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

//creat this after AppLayout since it needs to be defined
const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "",          // This represents the index (i.e., "/")
				element: <Body />
			},
			{
				path: "/about",
				element: <Suspense fallback={<h1>LOADING...</h1>}> <About /> </Suspense>,
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
				path: "cart", element: <Cart />
			},
			{
				path: "/restaurant/:id", element: <RestaurantMenu />
			},
			{
				path: "/instamart", 
				element: (
				<Suspense fallback = {<MyShimmer />}>  {/*fallback is optional*/}
					<Instamart /> 
				</Suspense>
				)
			}
		],
		errorElement: <ErrorPage value={true}/> // Error boundary for this route and its children
		// /about, /about/xyz all are children of /, if not explicitly scoped otherwise
		//so any path that is not valid will show <ErrorPage />
	}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppRouter2 />);
