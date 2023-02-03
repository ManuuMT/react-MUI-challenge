import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/PersonOutline";
import LocalMallIcon from "@mui/icons-material/LocalMallOutlined";

const Search = styled("div")(({ theme }) => ({
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

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

const EmptyBoxWrapper = styled("div")(({ theme }) => ({
  width: "172px",
  height: "48px",
  // bgcolor: "common.white",
  backgroundColor: alpha(theme.palette.common.white, 0.9),
  //   backgroundColor: "#CED0D3",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Navbar: React.FC = () => {
  return (
    <AppBar sx={{ padding: "20px 1%" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "80%",
            gap: "5%",
          }}
        >
          <EmptyBoxWrapper>
            <Box>
              <Typography sx={{ color: "#848A92" }}>LOGO</Typography>
            </Box>
          </EmptyBoxWrapper>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search products"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <PersonIcon />
          <Typography>Sign in</Typography>
          <LocalMallIcon />
          <Typography>Cart</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
