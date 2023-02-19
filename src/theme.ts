import { createTheme } from "@mui/material";

export const theme = createTheme({
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
    primary: {
      main: "#ffffff",
    },
  },
});
