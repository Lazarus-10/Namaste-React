import { useEffect, useState } from "react"

const useOnlineStatus = () => {
   const [isOnline, setIsOnline] = useState(navigator.onLine);

   useEffect(() => {
      const handleOnline = () => {
         console.log("Setting true");
         setIsOnline(true);
      }
      const handleOffline = () => {
         console.log("Setting false");
         setIsOnline(false);
      }

      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);

      return () => {
         window.removeEventListener("online", handleOnline);
         window.removeEventListener("offline", handleOffline);
      };
   }, [])

   return isOnline;
};

export default useOnlineStatus;