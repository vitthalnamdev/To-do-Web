import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <h4 style={styles.brand}>Todo's.com</h4>
        <p>© {new Date().getFullYear()} All rights reserved.</p>

        {/* Social Media Icons */}
        <div style={styles.socialIcons}>
          <a href="#" style={styles.icon}><i className="fab fa-facebook"></i></a>
          <a href="#" style={styles.icon}><i className="fab fa-twitter"></i></a>
          <a href="#" style={styles.icon}><i className="fab fa-instagram"></i></a>
          <a href="#" style={styles.icon}><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  // Apply flex to the entire body to push content to the top and footer to the bottom
  body: {
    display: "flex",
    flexDirection: "column",
    minHeight: "50vh", // Full viewport height
    justifyContent: "space-between", // Push content to top, footer to bottom
  },
  footer: {
    background: "linear-gradient(135deg, #6e8efb, #a777e3)", // Gradient effect
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    marginTop: "auto", // Ensure footer sticks at the bottom
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  brand: {
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: "5px",
  },
  socialIcons: {
    marginTop: "10px",
  },
  icon: {
    color: "#fff",
    fontSize: "20px",
    margin: "0 10px",
    textDecoration: "none",
    transition: "0.3s",
  },
};

export default Footer;
