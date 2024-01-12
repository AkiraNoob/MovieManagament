"use client";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import variables from "../app/_variants.module.scss";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    primary_outlined: true;
    secondary: true;
    transperant: true;
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: variables.primary,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: variables.primary,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxSizing: "border-box",
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        root: {
          gap: "4px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "16px !important",
        },
        adornedStart: {
          gap: "8px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: "4px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "unset",
          borderRadius: "16px",
          fontWeight: 800,
          fontSize: "16px",
          verticalAlign: "middle",
          textTransform: "none",
        },
      },
      variants: [
        {
          props: {
            variant: "primary",
          },
          style: {
            backgroundColor: variables.primary,
            color: variables.backgroundColor,
            ":hover": {
              backgroundColor: variables.primary,
            },
          },
        },
        {
          props: {
            variant: "primary_outlined",
          },
          style: {
            padding: "14px",
            border: `1px solid ${variables.primary}`,
            backgroundColor: "transparent",
            color: variables.primary,
            ":hover": {
              borderColor: variables.primary,
              backgroundColor: "transparent",
            },
          },
        },
        {
          props: {
            variant: "secondary",
          },
          style: {
            padding: "14px",
            backgroundColor: variables.backgroundColorSecondary,
            backdropFilter: "blur(5px)",
            color: variables.text,
            ":hover": {
              backgroundColor: variables.backgroundColorSecondary,
            },
          },
        },
        {
          props: {
            variant: "transperant",
          },
          style: {
            padding: "0px",
            backgroundColor: "transperant",
            backdropFilter: "blur(5px)",
            color: variables.text,
          },
        },
      ],
    },
  },
});

export default theme;
