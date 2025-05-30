import { Link, Outlet } from "react-router-dom";
import Profile from "./ProfileClass.jsx"
import ProfileFunctionalComp from "./Profile.jsx";
import { Component } from "react";

/* 
 ! Important
 LifeCycle would be
 1 Parent Constructor
 2 Parent Render
 3 Child Constructor
 4 Child Render
 5 Child ComponentDidMount
 6 Parent ComponentDidMount

*/

class About extends Component {
   constructor(props){
      super(props);
      console.log("Parent - Constructor");
   }
   componentDidMount(){
      console.log("Parent - ComponentDidMount");
   }
   render(){
      console.log("Parent - Render");
      return (
         <div> 
            <h1>About Us Page</h1>
            <p>This is the Namste React Live Course Chapter 07 - Finding the Path🚀</p>
            {/* <Outlet /> */}
            <ProfileFunctionalComp name = {"First Child"}/>
         </div>
      );
   }
}

/* 
* Parent Constructor
* Parent Render
*     First Child Constructor
*     First Child Render
*     Second Child Constructor
*     Second Child Render
*     First Child ComponentDidMount
*     Second Child ComponentDidMount
* Parent Component DidMount
*/
export default About;