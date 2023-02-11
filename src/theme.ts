import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    h1: {
      color: "white",
      fontSize: "3rem",
      fontWeight: 700,
    },
    h2: {
      color: "black",
      fontSize: "2.4rem",
      fontWeight: 650,
    },
    h3: {
      color: "black",
      fontSize: "1.8rem",
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: "#000000",
    },
  },
});
