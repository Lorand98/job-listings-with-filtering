import { SimplePaletteColorOptions } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    neutral?: SimplePaletteColorOptions;
  }

  interface Palette {
    neutral?: SimplePaletteColorOptions;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: true;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    desktop: true;
  }
}
