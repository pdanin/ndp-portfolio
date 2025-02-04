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
    },
    h2: {
        fontSize: "3.2rem",
    },
    h3: {
      fontSize: "2rem",
    },
    body1: {
        fontSize: "1rem",
    },
    body2: {
      fontFamily: "sans-serif",
      fontSize: "1.5rem",
      fontWeight: 400,
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