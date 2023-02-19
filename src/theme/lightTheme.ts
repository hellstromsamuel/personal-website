import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2.1rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.7rem",
      fontWeight: 400,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff",
      light: "rgb(255,255,255)",
    },
  },
});

export default lightTheme;
