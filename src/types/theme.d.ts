import { PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    desktop: true;
  }
}
