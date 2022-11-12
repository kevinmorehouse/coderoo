export const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#673fd7",
    },
    secondary: {
      main: "#f4709c",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        background:
          "linear-gradient(90deg, #3550b2 9.16%, #5643cc 43.89%, #673fd7 64.72%)",
        border: 0,
        borderRadius: 3,
        textTransform: "none",
        boxShadow: "0 1px 30px rgba(80, 63, 205, 0.5)",
        color: "white",
        height: 48,
        padding: "0 30px",
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiAppBar: {
      color: "transparent",
    },
  },
  typography: {
    fontSize: 16,
    button: {
      fontWeight: 500,
      fontSize: "1.2rem",
      textTransform: "none",
    },
    body1: {
      fontFamily: '"Roboto Mono", "Helvetica", "Arial", sans-serif',
    },
    body2: {
      fontFamily: '"Roboto Mono", "Helvetica", "Arial", sans-serif',
    },
  },
};
