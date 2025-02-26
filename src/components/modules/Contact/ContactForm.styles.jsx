import { Height } from "@mui/icons-material";
import { borderRadius, color } from "@mui/system";

export const useStyles = {
  root: {
    color: "white",
    mt: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
  },
  heading: {
    fontWeight: "bold",
  },
  description: { maxWidth: "30ch" },
  highlight: {
    color: "#9e9e9e",
  },
  subHeading: {
    fontWeight: "bold",
    color: "#9e9e9e",
  },
  socialIcons: {
    display: "flex",
    gap: "1rem",
    marginTop: "2rem",
  },
  containerSocial: {
    border: "1px solid #9e9e9e",
    borderRadius: ".5rem",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#0e0101",
    },
  },
  icon: {
    cursor: "pointer",
  },
  form: {
    display: "grid",
    gap: "1rem",
    width: "100%",
    // maxWidth: "400px",
  },
  flexInput: {
    display: "flex",
    width: "100%",
    gap: "1rem",
  },
  label: {
    color: "#e4e4e7",
    marginBottom: "8px",
    display: "block",
  },
  input: {
    backgroundColor: "#1e1e1e !important",
    color: "white !important",
    borderRadius: ".75rem",
    color: "#e4e4e7",
    "& .MuiInputBase-input::placeholder": {
      color: "#e4e4e7 !important",
    },
    "& .MuiInputBase-input": {
      color: "#e4e4e7", // Change text color
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#e4e4e7", // Change border color
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ccc", // Change border color on hover
    },
  },
  submitButton: {
    backgroundColor: "#38bdf8 !important",
    color: "#09090b !important",
    height: "2.75rem",
    borderRadius: ".75rem",
  },
};
