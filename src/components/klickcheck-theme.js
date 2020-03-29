import { createMuiTheme } from "@material-ui/core/styles"

const Klickcheck = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "rgb(250, 166, 26)",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#FFF",
    },
    secondary: {
      // light: will be calculated from palette.secondary.main,
      main: "rgb(0, 174, 239)",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#FFF",
    },
    error: {
      main: "rgb(175, 14, 14)",
    },
    success: {
      main: "rgb(34, 172, 71)",
    },
  },
})

export default Klickcheck
