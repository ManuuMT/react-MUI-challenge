import { alpha, styled } from "@mui/material/styles";

export const BigEmptyBox = styled("div")(({ theme }) => ({
  width: "100%",
  aspectRatio: "1 / 1",
  backgroundColor: alpha(theme.palette.common.black, 0.1),
}));
