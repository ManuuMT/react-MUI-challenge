import React, { useState } from "react";
import {
  CategoriesWrapper,
  CheckoutButton,
  ContinueButton,
} from "./Cart.styled";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import { CartItem } from "../CartItem";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { categoriesList, cartItemsArray } from "./Cart+Helper";
import Divider from "@mui/material/Divider";

const Cart: React.FC = () => {
  // * States
  const [items, setItems] = useState(cartItemsArray);

  // * Methods
  const UpdateProducts = (q: number, id: string) => {
    const productUpdated = items.map((product) =>
      product.id === id
        ? {
            ...product,
            quantity: q,
          }
        : product
    );
    setItems(productUpdated);
  };

  const CalculateTotal = () => {
    let sum = 0;
    items.map((product) => (sum += product.value * product.quantity));
    return sum;
  };

  const DeleteItem = (id: string) =>
    setItems(items.filter((item) => item.id != id));

  return (
    <>
      <CategoriesWrapper>
        <Container>
          <List sx={{ display: "flex", width: "70%" }}>
            {categoriesList.map((category) => (
              <ListItem key={category} sx={{ py: "0" }}>
                <ListItemText
                  primary={category}
                  sx={{ color: "text.secondary" }}
                />
              </ListItem>
            ))}
          </List>
        </Container>
      </CategoriesWrapper>
      <Container>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ display: "flex", flexDirection: "column", width: "70%" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", mt: 4, gap: "8px" }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Your cart
              </Typography>
              <Typography
                sx={{ fontWeight: "bold", color: "rgba(0,0,0,0.4)" }}
              >{`(${items.length})`}</Typography>
            </Box>
            <Box sx={{ display: "flex", width: "100%" }}>
              {items.length === 0 ? (
                <Typography variant="h5" sx={{ mt: 9 }}>
                  Oops! Looks like your cart is empty...
                </Typography>
              ) : (
                <List sx={{ width: "100%" }}>
                  {items?.map((item) => (
                    <CartItem
                      itemData={item}
                      key={item.name}
                      handleChange={(q) => UpdateProducts(q, item.id)}
                      deleteItem={() => DeleteItem(item.id)}
                    />
                  ))}
                </List>
              )}
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: "30%" }}>
            <Typography variant="h5" sx={{ mt: 4, fontWeight: "bold" }}>
              Order Summary
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
            >
              <Typography sx={{ color: "rgba(0,0,0,0.6)" }}>
                Number of items
              </Typography>
              <Typography sx={{ color: "rgba(0,0,0,0.6)" }}>
                {items.length}
              </Typography>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 4,
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>Total: </Typography>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "24px" }}
              >{`$${CalculateTotal()}`}</Typography>
            </Box>
            <CheckoutButton variant="contained">
              Proceed to Checkout
            </CheckoutButton>
            <ContinueButton variant="outlined">
              Continue shopping
            </ContinueButton>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Cart;
