import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/PersonOutline";
import LocalMallIcon from "@mui/icons-material/LocalMallOutlined";
import {
  EmptyBoxWrapper,
  Offset,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  TypographyWrapper,
} from "./Navbar.styled";

const Navbar: React.FC = () => {
  return (
    <React.Fragment>
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
                <TypographyWrapper>
                  <Typography>LOGO</Typography>
                </TypographyWrapper>
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
      <Offset />
      <Box sx={{ height: "40px" }} />
    </React.Fragment>
  );
};

export default Navbar;
