import { useEffect, useState } from "react";

const Profile = ({name}) => {
   const [count, setCount] = useState(0);
   const [count2, setCount2] = useState(0);

   useEffect(() => {
      var timer = setInterval(()=>{
         console.log("Namste React from Funcitonal Component!!");
      }, 1000);

      //useEffect can either return undefined(no return) or a cleanup function to run before the next effect or on unmount.
      return () => {
         console.log("useEffect return");
         clearInterval(timer);
      }
   }, []);

   return (
      <div>
         <h1>This is my Profile, {name}</h1>
         <h4>Count: {count}</h4>
         <h4>Count2: {count2}</h4>
         <button onClick={() => {
            setCount(count+1);
         }}>Add1</button>
         <button onClick={() => {
            setCount2(count2+2);
         }}>Add2</button>
      </div>
   );
}
export default Profile;