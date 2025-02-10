import { createTheme } from "@mui/material/styles";
import '../../styles/global.css'

const Theme = createTheme({
  palette: {
    background: {
      default: "#FBFBFB", 
      paper: "#FBFBFB",
    },
    text: {
      primary: "#433D44", 
    },
  },
  typography: {
    fontFamily: "Migra, sans-serif",
    hero1: {
        fontFamily: "Anton-SC, sans-serif",
        fontSize: "12rem",
        fontWeight: 400,
    },
    hero2: {
        fontSize: "4rem",
        fontWeight: 800,
        fontStyle: "italic",
    },
    h1: {
        fontSize: "4rem",
        "@media (max-width: 1000px)": {
          fontSize: "2.5rem",
        },
    },
    h2: {
        fontSize: "3.2rem",
        "@media (max-width: 1000px)": {
          fontSize: "2.2rem",
        },
    },
    h3: {
      fontSize: "2rem",
      fontStyle: "italic",
      "@media (max-width: 1000px)": {
        fontSize: "1.5rem",
      },
    },
    body1: {
        fontFamily: "SF-Pro-Display",
        fontSize: "1rem",
    },
    body2: {
      fontFamily: "SF-Pro-Display",
      fontSize: "1.5rem",
      fontWeight: 400,
      "@media (max-width: 1250px)": {
        fontSize: "1.25rem",
      },
      "@media (max-width: 1000px)": {
        fontSize: "1rem",
      },
    },
    body3: {
      fontFamily: "SF-Pro-Display",
      fontSize: "1.25rem",
      fontWeight: 200,
      fontStyle: "italic"
  },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#433D44", 
        },
      },
    },
  },
});

export default Theme;