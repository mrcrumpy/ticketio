import { ThemeOptions } from "@mui/material";

import NextLink from "next/link";
import { forwardRef } from "react";

const LinkComponent = forwardRef(function LinkBehaviour(props, ref) {
  return <NextLink ref={ref} {...props} />;
});

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
      fontWeight: 600,
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
      defaultProps: {
        LinkComponent,
      },
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
          alignItems: "flex-start",
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          paddingTop: "24px",
          paddingBottom: "24px",
          justifyContent: "center",
          display: "flex",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          background: "none",
          borderRadius: 0,
          paddingLeft: 0,
          paddingRight: 0,
          width: "auto",
          minWidth: 0,
          borderBottom: "3px solid transparent",
          height: "24px",

          marginRight: "8px",
          marginLeft: "8px",
          "&.Mui-selected": {
            background: "none",
            fontWeight: "bold",
            borderBottom: "3px solid #000",
          },
        },
        previousNext: {
          marginRight: "32px",
          marginLeft: "32px",
        },
      },
    },
  },
} as ThemeOptions;

export default theme;
