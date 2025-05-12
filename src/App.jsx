import React from "react";
//earlier we user import ReactDOM from "react-dom"
import ReactDOM from "react-dom/client"; //new entry point for creating a root with concurrent rendering capabilities.(React-18+)
/* 
    # We can also use import customName from "react-dom/client"
    ? The reason it works is due to default exports in JavaScript modules.
    ? When a module exports something as the default export, you can import it using any name you like
    ? react-dom/client module it would have been written like this in the end "export default ReactDOM;"
    ? What is Module: A module is simply a file containing code that is written to be reused and imported into other files.
 */
//Default import(you can give any name)
import Header from "./components/Header";
//Named import
import {Title} from "./components/Header";

// Combined (default export and named export)
// import Header, {Title} from "./components/Header"

//can also write 
import * as obj from "./components/Header" // and then we can use like obj.Title
import Body from "./components/Body";
import Footer from "./components/Footer";

/* 
Header
    - Logo
    - List Items(NavItems)
    - Cart
Body
    - Search Bar
    - Restaurant List
        - Restaurant Card
            - Image
            - Name
            - Rating
            - Cuisines
Footer 
    - Links
    - Copyright
*/

/* JSX can only have one parent, either I can write div but that would be unnecessary
    thats why React provides React.Fragment, it is like a empty tag
    => writing React.Frament looks ugly, so we can alo write empty tag
    ! <React.Fragment> == <>
 */
const AppLayout = () => {
    return (
        // <div>
        // <React.Fragment>
        <>
            {/* <obj.Title /> */}
            {/* <Title /> */}
            <Header />
            <Body />
            <Footer />
        </>
        // </React.Fragment>
        // </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);