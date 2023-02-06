import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#091625",
    },
  },
  typography: {
    fontFamily: `"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
