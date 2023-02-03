import React from "react";
import { CategoriesWrapper } from "./Cart.styled";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

const listItems = [
  "All products",
  "Packaging",
  "Drinkware",
  "Apparel",
  "Notebooks",
  "Backpacks",
];

const Cart: React.FC = () => {
  return (
    <>
      <CategoriesWrapper>
        <List sx={{ display: "flex", width: "70%" }}>
          {listItems.map((item) => (
            <ListItem key={item}>
              <ListItemText primary={item} sx={{ color: "text.secondary" }} />
            </ListItem>
          ))}
        </List>
      </CategoriesWrapper>
    </>
  );
};

export default Cart;
