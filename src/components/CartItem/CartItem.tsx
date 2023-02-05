import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import NativeSelect from "@mui/material/NativeSelect";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { CartItemProps, CartItemType } from "../../models";
import { EmptyImageBox } from "../Cart/Cart.styled";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

interface CartItemInterface {
  itemData: CartItemProps;
  calculatedValue: (val: number) => void;
}

const CartItem: React.FC<CartItemInterface> = (props) => {
  // * States
  const [counter, setCounter] = useState<string>("1");
  const [value, setValue] = useState<number>();

  // * Methods
  const HandleChange = (e: any) => setCounter(e.target.value);
  const CalculateValue = () => {
    const newValue =
      (props.itemData.value! * Math.floor(Number(counter) * 100)) / 100;
    setValue(newValue);
    props.calculatedValue(newValue);
  };

  // * Life Cycle
  useEffect(() => CalculateValue(), [counter]);

  return (
    <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", gap: "16px" }}>
        <EmptyImageBox />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography>{props.itemData.name}</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "12px",
              marginBottom: "16px",
            }}
          >
            <Typography>Quantity: </Typography>
            <Box sx={{ minWidth: 120 }}>
              <NativeSelect
                value={counter}
                onChange={HandleChange}
                // inputProps={{
                //   name: "age",
                //   id: "uncontrolled-native",
                // }}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </NativeSelect>
            </Box>
          </Box>
          {props.itemData.type === CartItemType.Pack && (
            <ul style={{ marginBottom: "22px" }}>
              {props.itemData.content.map((product) => (
                <li key={product.name}>
                  <Typography>{`${product.name}: ${product.description}`}</Typography>
                </li>
              ))}
            </ul>
          )}
          <Box sx={{ display: "flex" }}>
            <DeleteOutlinedIcon />
            <Typography>Remove</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <Typography>{`$${props.itemData.value}`}</Typography>
        <Typography>Total: ${value}</Typography>
      </Box>
    </ListItem>
  );
};

export default CartItem;
