import { ThemeOptions } from "@mui/material";

const theme = {
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    error: {
      main: "#BC2F2F",
    },
  },
  typography: {
    h1: {
      fontWeight: "bold",
      lineHeight: "1.56",
      fontSize: "1.56rem",
    },
    h2: {
      fontSize: "1.43rem",
      fontWeight: "bold",
      lineHeight: "1.56",
    },
    h3: {
      fontWeight: "medium",
      fontSize: "1.125rem",
      lineHeight: "1.56",
    },
    strong: {
      fontWeight: "bold",
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          background: "#f2f2f2",
          borderRadius: "6px",
          overflow: "hidden",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          textTransform: "none",
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: "0",
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          background: "#ffffff",
          overflow: "hidden",
          borderRadius: "6px",
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        positionStart: {
          marginLeft: "12px",
          color: "#000",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: "0",
          paddingBottom: "5px",
        },
      },
    },
  },
} as ThemeOptions;

export default theme;
