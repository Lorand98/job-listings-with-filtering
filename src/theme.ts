import { createTheme } from "@mui/material";

export const mainColor = "#5ba4a4";
export const neutralDark = "#2c3a3a";

export default createTheme({
  palette: {
    primary: {
      main: mainColor,
    },
    neutral: {
      light: "#eef6f6",
      main: "#7b8e8e",
      dark: neutralDark,
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
      md: 1200,
      desktop: 1440,
    },
  },
});
