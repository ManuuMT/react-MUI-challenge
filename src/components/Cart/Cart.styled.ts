import { alpha, styled } from "@mui/material/styles";

export const CategoriesWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.action.disabledBackground,
  height: "64px",
  width: "100vw",
}));

export const EmptyImageBox = styled("div")(({ theme }) => ({
  width: "120px",
  height: "120px",
  backgroundColor: alpha(theme.palette.common.black, 0.1),
}));
