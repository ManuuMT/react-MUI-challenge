import React, { useEffect, useState } from "react";
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
  // * States
  const [total, setTotal] = useState<number[]>([0, 0, 0]);

  // * Methods
  const SetTotalArray = (val: number, i: number) => {
    let newTotal = total;
    newTotal[i] = val;
    const newnewTotal = [...newTotal];
    setTotal(newnewTotal);
  };

  const CalculateTotal = () => total.reduce((acc, cv) => acc + cv, 0);

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
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ display: "flex", flexDirection: "column", width: "70%" }}>
            <Typography variant="h5" sx={{ mt: 4, fontWeight: "bold" }}>
              Your cart
            </Typography>
            <Box sx={{ display: "flex", width: "100%" }}>
              <List sx={{ width: "100%" }}>
                {cartItemsArray.map((item, i) => (
                  <CartItem
                    itemData={item}
                    key={item.name}
                    calculatedValue={(val) => SetTotalArray(val, i)}
                  />
                ))}
              </List>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: "30%" }}>
            <Typography variant="h5" sx={{ mt: 4, fontWeight: "bold" }}>
              Order Summary
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Number of items</Typography>
              <Typography>{cartItemsArray.length}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Total: </Typography>
              <Typography>{`$${CalculateTotal()}`}</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Cart;
