import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import coffeeImage from "url:../assets/img/coffee.png";//for parcel 2 use "url:"
// const coffeeImage = new URL('../assets/img/coffee.png', import.meta.url).href;

const ErrorPage = ({ onRetry }) => {
  const err = useRouteError();
  console.log(err);
  
  const navigate = useNavigate();
  const handleHomeClick = () => {
    // if we are already on the "/" and error occured clicking on home button will 
    // not work as react will not remount or re-render as it thinks we are already there
    // ! hacky Way
    navigate("/temp", { replace: true }); // go to a dummy page(hack)
    setTimeout(() => navigate("/"), 0);   // and immediately go back

    // ? Force Reload
    // window.location.href = "/"; (reloads the actual page)
  };  

  return (
    <div style={styles.container}>
      <img
        src={coffeeImage} // broken pizza slice icon
        alt="Oops! Broken Pizza"
        style={styles.image}
      />
      <h1 style={styles.title}>Oops! Our kitchen hit a snag.</h1>
      <p style={styles.message}>
        We’re having trouble serving your tasty order. Please try again!<br/>
        {err?.status + " : " + err?.statusText}
      </p>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={onRetry}>
          Retry
        </button>
        <button style={styles.secondaryButton} onClick={handleHomeClick}>
          Home
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff8f0", 
    padding: "20px",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
  },
  image: {
    width: "140px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "28px",
    color: "#f76c1b",
    marginBottom: "10px",
  },
  message: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "30px",
    maxWidth: "320px",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
  },
  button: {
    backgroundColor: "#f76c1b",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "12px 24px",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(247, 108, 27, 0.4)",
    transition: "background-color 0.3s ease",
  },
  secondaryButton: {
    backgroundColor: "#ffffff",
    color: "#f76c1b",
    border: "2px solid #f76c1b",
    borderRadius: "6px",
    padding: "12px 24px",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(247, 108, 27, 0.2)",
    transition: "background-color 0.3s ease",
  },
};

export default ErrorPage; 
