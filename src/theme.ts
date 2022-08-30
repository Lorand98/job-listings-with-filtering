import { createTheme } from "@mui/material";

export default createTheme({
  palette: {
    primary: {
      main: "#5ba4a4",
    },
    neutral: {
      light: "#eef6f6",
      main: "#7b8e8e",
      dark: "#2c3a3a",
    },
    background: {
      default: "#effafa",
    },
  },
  typography: {
    fontSize: 15,
    fontFamily: ["League Spartan", "sans-serif"].join(","),
  },
  breakpoints: {
    values: {
      mobile: 375,
      desktop: 1440,
    },
  },
});
