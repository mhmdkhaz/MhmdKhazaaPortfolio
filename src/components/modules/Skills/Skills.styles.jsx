export const styles = {
  container: {
    color: "white",
    mt: 10,
  },
  title: {
    fontWeight: "bold",
    maxWidth: "max-content",
    background: "-webkit-linear-gradient(0deg, #fafafa, #a1a1aa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    marginTop: "8px",
    maxWidth: "50ch",
    color: "#a1a1aa",
    marginTop: ".75rem",
  },
  gridContainer: {
    marginTop: "24px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    border: "3px solid #fafafa1a",
    borderRadius: "16px",
    textAlign: "center",
    padding: ".75rem",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
    transition: "all .2s",
    "&:hover": {
      background: "#27272a",
    },
  },
  figure: {
    background: "#3f3f4680",
    width: "3rem",
    height: "3rem",
    padding: ".5rem",
    borderRadius: ".5rem",
  },
  img: {
    marginBottom: "16px",
    maxWidth: "100%",
    maxHight: "100%",
  },
  toolName: {
    fontWeight: "bold",
    color: "#fafafa",
    textAlign: "left",
  },
  toolDescription: {
    color: "#a1a1aa",
  },
};
