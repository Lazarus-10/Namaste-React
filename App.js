import React from "react";
import ReactDOM from "react-dom/client";

//The @2nd param is used to give properties to the h1 tag
// const heading = React.createElement("h1", {}, "Namaste Everyone!"); // == <h1>Namaste Everyone!</h1>
const heading = React.createElement("h1", {
    id: "title",
    style: { color: "red", margin: "50px" }
}, "Namaste Everyone!");  // == <h1 id="title">Namaste Everyone!</h1>

const heading2 = React.createElement("h2", {
    id: "title2",
}, "Heading2 from Parcel!");


const container = React.createElement("div", { id: "container" }, [heading, heading2]);

console.log(heading); //its an object

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element(which is object) inside root
//this render takes the react element and modifies the DOM by injecting it in the dom
// root.render(heading);
root.render(container);


// ideal one root and one render method
//we can inject react into a particular div or searchbar or anything but generally we write all in one(header footer etc)
/* React came with idea of writing html and css with javascript but as we can see crating elements are becoming complex so jsx came in picture  */
