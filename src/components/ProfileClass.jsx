import React from "react";
class Profile extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         count: 0,
         count2: 0,
         count3: 0
      }
      console.log("Child - Constructor " + this.props.name);
   }

   componentDidMount(){
      //just like we use useEffect() hook to call anything after render,
      // this method is also called after render, which is similar to useEffect
      // constructor -> render -> componentDidMount()  (LiefCycle Methods)

      //initialize state => constructor
      // API call => componentDidMount
      this.timer = setInterval(() => { //returns a unique interval id, used this.timer so that we can refer it in other function
         console.log("NAMASTE REACT OP");
      }, 1000); //a Timer starts and namaste react gets printed every 1 sec
      // ! but it will not close automaticlly even if we go to other page
      // ! you went to About page, went back, came back (it will start printing twice in 1 sec)
      // ! went 3 times -> thrice
      // ? So clear in component will unmount

      console.log("Child - ComponentDidMount "+ this.props.name);
   }
   componentDidUpdate(){
      //not called for initial render, but for every re-render
      console.log("ComponentDidUpdate");
   }
   componentWillUnmount(){
      //called before component is destroyed(eg when we switch to new page)
      //we can use this to perform necessary cleanup like cancelled network requests
      //or cleaning up DOM elements created in componentDidMount()
      clearInterval(this.timer);
      console.log("Component will unmount");
   }
   render() {
      console.log("Child - Render " + this.props.name);
      return (
         <div>
            <h1>This is my Profile from Class Component, {this.props.name}</h1>
            <h4>Count: {this.state.count}</h4>
            <h4>Count2: {this.state.count2}</h4>
            <h4>Count3: {this.state.count3}</h4>
            <button onClick={() => {
               this.setState({
                  count: this.state.count + 1, //count2 will not be hampered
                  count3: 5
               })
            }}>Add1</button>
            <button onClick={() => {
               this.setState({
                  count2: this.state.count2 + 2,
               })
            }}>Add2</button>
         </div>
      );
   }
}
export default Profile;