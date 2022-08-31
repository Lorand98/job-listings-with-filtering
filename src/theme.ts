import { createTheme } from '@mui/material';

export const mainNeutralColor = '#7b8e8e';
export const darkNeutralColor = '#2c3a3a';

export default createTheme({
  palette: {
    primary: {
      main: '#5ba4a4',
    },
    neutral: {
      light: '#eef6f6',
      main: mainNeutralColor,
      dark: darkNeutralColor,
    },
    background: {
      default: '#effafa',
    },
  },
  typography: {
    fontSize: 15,
    fontFamily: ['League Spartan', 'sans-serif'].join(','),
  },
  breakpoints: {
    values: {
      mobile: 375,
      md: 1200,
      desktop: 1440,
    },
  },
});
