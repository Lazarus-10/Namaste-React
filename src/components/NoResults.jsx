import React from "react";

const NoResults = ({ searchText }) => {
  return (
    <div style={styles.container}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/7486/7486823.png" // Optional: change to a custom 'empty search' image
        alt="No results"
        style={styles.image}
      />
      <h2 style={styles.title}>No restaurants found</h2>
      <p style={styles.message}>
        We couldn’t find anything matching <strong>"{searchText}"</strong>.<br />
        Try searching with a different name.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
  },
  image: {
    width: "120px",
    marginBottom: "20px",
    opacity: 0.8,
  },
  title: {
    fontSize: "22px",
    color: "#f76c1b",
    marginBottom: "10px",
  },
  message: {
    fontSize: "16px",
    color: "#555",
    maxWidth: "320px",
  },
};

export default NoResults;
