import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { CartItemProps, CartItemType } from "../../models";
import { EmptyImageBox } from "../Cart/Cart.styled";

interface CartItemInterface {
  itemData: CartItemProps;
}

const CartItem: React.FC<CartItemInterface> = (props) => {
  // * States
  const [counter, setCounter] = useState<number>();

  return (
    <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", gap: "16px" }}>
        <EmptyImageBox />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography>{props.itemData.name}</Typography>
          <Typography>Quantity: </Typography>
          {props.itemData.type === CartItemType.Pack && (
            <ul>
              {props.itemData.content.map((product) => (
                <li>
                  <Typography>{`${product.name}: ${product.description}`}</Typography>
                </li>
              ))}
            </ul>
          )}
        </Box>
      </Box>
      <Box>
        <Typography>{`$${props.itemData.value}`}</Typography>
        <Typography>Total: </Typography>
      </Box>
    </ListItem>
  );
};

export default CartItem;
