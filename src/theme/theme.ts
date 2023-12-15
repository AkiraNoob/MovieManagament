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
    secondary: true;
  }
}

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "unset",
          borderRadius: "16px",
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
            variant: "secondary",
          },
          style: {
            padding: "14px",
            backgroundColor: variables.backgroundColorSecondary,
            color: variables.text,
            ":hover": {
              backgroundColor: variables.backgroundColorSecondary,
            },
          },
        },
      ],
    },
  },
});

export default theme;
