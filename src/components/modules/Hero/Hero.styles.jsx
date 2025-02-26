import { keyframes } from "@emotion/react";

const scales = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(3);
    opacity: 0;
  }
`;

const heroStyles = {
  container: {
    height: "100vh",
    color: "#fff",
    padding: "0 20px",
  },
  leftSection: {
    textAlign: "left",
  },
  profileStatus: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "1.5rem",
    justifyContent: "flex-start",
  },
  onLine: {
    background: "red",
    borderRadius: "50%",
    width: ".5rem",
    height: ".5rem",
    backgroundColor: "rgb(52, 211, 153)",
  },
  TowOnLine: {
    borderRadius: "50%",
    width: ".5rem",
    height: ".5rem",
    backgroundColor: "rgb(52, 211, 153)",
    animation: `${scales} 0.8s infinite ease-in-out`, // Properly applied the animation
  },
  statusText: {
    fontSize: "1rem",
    color: "#e5e7eb",
  },
  headline: {
    fontWeight: "bold",
    fontSize: { xs: "2rem", md: "3.5rem" },
    lineHeight: "1.2",
    background: "linear-gradient(0deg, #fafafa, #a1a1aa)", // Corrected this
    WebkitBackgroundClip: "text", // Added proper camelCase key
    WebkitTextFillColor: "transparent", // Corrected this
    margin: "0 0 1.5rem",
  },
  buttonsContainer: {
    display: "flex",
    gap: "1rem",
    marginTop: "2rem",
    justifyContent: "flex-start",
    flexDirection: { xs: "column", sm: "row" },
  },
  downloadButton: {
    backgroundColor: "rgb(56 189 248 / 1)",
    color: "rgb(9 9 11 / 1)",
    height: "2.75rem",
    textTransform: "none",
    borderRadius: ".75rem",
    fontWeight: "bold",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    padding: ".850rem",
    fontWeight: 500,
  },
  scrollButton: {
    color: "#fff",
    borderRadius: ".75rem",
    height: "2.75rem",
    padding: ".850rem",
    textTransform: "none",
    fontWeight: "bold",
    backgroundColor: "rgb(39 39 42 / 1)",
    border: "1px solid rgb(39 39 42 / 1)",
  },
  rightSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    mt: { lg: 0, xs: 3 },
  },
  figure: {
    background: "linear-gradient(to top,#38bdf8 , rgb(18, 18, 18))",
    width: { lg: "100%", xs: "100%" },
    height: { lg: "100%", xs: "200px" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    objectFit: "cover",
    borderRadius: "20px",
    width: "80%",
    maxWidth: "400px",
    height: "auto",
  },
  "@media (max-width: 600px)": {
    headline: {
      fontSize: "2rem",
    },
    downloadButton: {
      fontSize: ".75rem",
      padding: ".75rem",
    },
    scrollButton: {
      fontSize: ".75rem",
      padding: ".75rem",
    },
    profileImage: {
      width: "100%",
      maxWidth: "100%",
    },
  },
};

export default heroStyles;
