import { createMuiTheme } from "@material-ui/core/styles";
export const theme = createMuiTheme({
  palette: {
    action: {
      disabled: "#A0A0A0",
      disabledBackground: "rgba(89, 210, 188, 0.1)",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
      dark: "#070F23",
      ligthDark: "#121827",
    },
    primary: {
      light: "rgba(89, 210, 188, 1)",
      main: "#f9f9f9",
    },
    red: {
      red100: "#FFFDFE",
      red200: "#070F23", //#ffc2a8
      red300: "#252E44",
      red500: "#e0077d", // #d16c00
    },
    textColors: {
      primary: "#E0077D",
      secondary: "#E0077D",
      textPrimary: "#ffffff",
      textSecondary: "#1e1e1e",
      textLight: "#212121",
      textDark: "#e5e5e5",
    },
  },
  typography: {
    fontFamily: "Karla, Roboto, sans-serif",
    h1: {
      fontFamily: "Shrikhand",
      fontSize: "3.125rem",
    },
    h2: {
      fontFamily: "Shrikhand",
      fontSize: "2.1875rem",
    },
    h3: {
      fontFamily: "Shrikhand",
      fontSize: "1.75rem",
    },
    h4: {
      fontFamily: "Karla",
      fontSize: "1.75rem",
      fontWeight: "bold",
    },
    h5: {
      fontFamily: "Karla",
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    h6: {
      fontFamily: "Karla",
      fontSize: "1.375rem",
      fontWeight: "normal",
    },
    subtitle1: {
      fontFamily: "Karla",
      fontSize: "1.25rem",
      fontWeight: "bold",
    },
    body1: {
      fontFamily: "Karla",
      fontSize: "1.125rem",
    },
    body2: {
      fontFamily: "Karla",
      fontSize: "1rem",
    },
  },
});
export default theme;
