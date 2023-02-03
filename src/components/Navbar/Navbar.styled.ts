import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: theme.palette.common.white,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.9),
  },
  marginLeft: 0,
  width: "60%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

export const EmptyBoxWrapper = styled("div")(({ theme }) => ({
  width: "172px",
  height: "48px",
  backgroundColor: alpha(theme.palette.common.white, 0.9),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const TypographyWrapper = styled("div")(({ theme }) => ({
  color: alpha(theme.palette.common.black, 0.6),
}));
