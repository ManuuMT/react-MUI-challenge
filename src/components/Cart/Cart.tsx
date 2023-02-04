import React from "react";
import { CategoriesWrapper } from "./Cart.styled";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import { CartItem } from "../CartItem";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { categoriesList, cartItemsArray } from "./Cart+Helper";

const Cart: React.FC = () => {
  return (
    <>
      <CategoriesWrapper>
        <List sx={{ display: "flex", width: "70%" }}>
          {categoriesList.map((category) => (
            <ListItem key={category}>
              <ListItemText
                primary={category}
                sx={{ color: "text.secondary" }}
              />
            </ListItem>
          ))}
        </List>
      </CategoriesWrapper>
      <Container>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h3" sx={{ mt: 4 }}>
              Your cart
            </Typography>
            <Box sx={{ display: "flex", width: "100vw" }}>
              <List sx={{ width: "70vw" }}>
                {cartItemsArray.map((item) => (
                  <CartItem itemData={item} key={item.name} />
                ))}
              </List>
              <Box sx={{ width: "30vw" }}>Order</Box>
            </Box>
          </Box>
          <Box></Box>
        </Box>
      </Container>
    </>
  );
};

export default Cart;
