import noInternetImage from "url:../assets/img/no-internet.png"; // replace with your own wifi/no-connection image

const NoInternetPage = () => {

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div style={styles.container}>
      <img
        src={noInternetImage}
        alt="No Internet Connection"
        style={styles.image}
      />
      <h1 style={styles.title}>No Internet Connection</h1>
      <p style={styles.message}>
        It seems you are offline. Please check your connection and try again.
      </p>
      <button style={styles.button} onClick={handleRetry}>
        Retry
      </button>
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
    width: "5rem",
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
};

export default NoInternetPage;
