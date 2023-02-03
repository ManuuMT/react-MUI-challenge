import { createTheme } from "@mui/material/styles";

export enum themePalette {
  DarkBlue = "#091625",
  Dark03 = "#3A4451",
  Dark04 = "#535C67",
  Dark05 = "#6B737C",
  Dark06 = "#848A92",
  Dark09 = "#CED0D3",
  Dark10 = "#E6E8E9",
}

export const theme = createTheme({
  palette: {
    primary: {
      main: themePalette.DarkBlue,
    },
  },
});
