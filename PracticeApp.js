import React from "react";
import ReactDOM from "react-dom/client";

//The @2nd param is used to give properties to the h1 tag
// const heading = React.createElement("h1", {}, "Namaste Everyone!"); // == <h1>Namaste Everyone!</h1>
const heading = React.createElement("h1", {
    id: "title",
    style: { color: "red", margin: "50px" }
}, "Namaste Everyone!");  // == <h1 id="title">Namaste Everyone!</h1>

console.log(heading); //its an object


//JSX expression -> gets converted to react element
const heading2 = (
    <h1 id = "title3" key = "h3">Namaste 3</h1>
)

const Title = () => (
    <h1 id = "title4" key = "h4">Title from func comp</h1>
)

// const container = React.createElement("div", { id: "container" }, [heading, heading2]); //duplicate key for siblings 

//React component
// - Functional - New (A function returning React elements)
// - Class Based - Old

// * Name of component should start with Capital Letters(Convention - not mandatory)
//render reactElement with {}, funct comp with <Comp /> or as they are at the end function wwe can use like {Comp()}
//You can write any piece of javaScript inside JSX by using {}
//JSX santizes the JS code also before processing
// eg const data = api.getData() returned a malicious JS code that can steal password if got executed in the browser(XSS attack(cross-site-scripting))
//JSX will prevent this by escaping any embedded values to prevent XSS atacks
/* const name = "<script>alert('XSS')</script>";
<div>{name}</div> // Renders as plain text, not script */

//Composing Components(Component Composition) => using components inside a component (like <Title /> below)
const HeaderComponent = () => {
    return (
        <div>
            {heading2}
            <Title /> 
            {Title()}
            {1 + 2}
            <h1>Namaste React functional component</h1>
            <h2>This is a H2 Tag</h2>
        </div>
    );
}

// * Shorter Way
const HeaderComponent2 = () => (
    <div>
        <h1>Namaste React functional component</h1>
        <h2>This is a H2 Tag</h2>
    </div>
)
/* 
JSX	 Syntax sugar   Produces React Elements 
React Element	Plain object	Describes UI (virtual DOM node)
Component	Function or class	Returns React Elements (via JSX)
*/

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element(which is object) inside root
//this render takes the react element and modifies the DOM by injecting it in the dom
// root.render(heading);

// root.render(container); //when rendering React Element
root.render(<HeaderComponent />) //when rendering Functional Component


// ideal one root and one render method
//we can inject react into a particular div or searchbar or anything but generally we write all in one(header footer etc)
/* React came with idea of writing html and css with javascript but as we can see crating elements are becoming complex so jsx came in picture  */
