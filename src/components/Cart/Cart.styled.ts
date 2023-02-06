import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";

export const CategoriesWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.action.disabledBackground,
  height: "64px",
  width: "100vw",
  display: "flex",
  alignItems: "center",
}));

export const EmptyImageBox = styled("div")(({ theme }) => ({
  width: "120px",
  height: "120px",
  backgroundColor: alpha(theme.palette.common.black, 0.1),
}));

export const CheckoutButton = styled(Button)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.85),
  marginBottom: "12px",
  textTransform: "none",
  padding: "8px 0",
  fontWeight: "bold",
}));

export const ContinueButton = styled(Button)(() => ({
  textTransform: "none",
  padding: "8px 0",
  border: "2px solid",
  fontWeight: "bold",
}));
