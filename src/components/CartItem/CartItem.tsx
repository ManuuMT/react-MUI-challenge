import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import NativeSelect from "@mui/material/NativeSelect";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { CartItemProps, CartItemType } from "../../models";
import { EmptyImageBox } from "../Cart/Cart.styled";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Divider from "@mui/material/Divider";

interface CartItemInterface {
  itemData: CartItemProps;
  calculatedValue: (val: number) => void;
  deleteItem: () => void;
}

const CartItem: React.FC<CartItemInterface> = (props) => {
  // * States
  const [counter, setCounter] = useState<string>("10");
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
    <ListItem
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "22px",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Box sx={{ display: "flex", gap: "16px" }}>
          <EmptyImageBox />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontWeight: "bold" }}>
              {props.itemData.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "12px",
                marginBottom: "16px",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>Quantity: </Typography>
              <Box sx={{ minWidth: 120 }}>
                <NativeSelect
                  value={counter}
                  onChange={HandleChange}
                  sx={{ fontWeight: "bold" }}
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={30}>30</option>
                  <option value={40}>40</option>
                  <option value={50}>50</option>
                </NativeSelect>
              </Box>
            </Box>
            {props.itemData.type === CartItemType.Pack && (
              <ul style={{ marginBottom: "22px" }}>
                {props.itemData.content.map((product) => (
                  <li
                    key={product.name}
                    style={{ display: "flex", gap: "5px" }}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>
                      {`${product.name}: `}
                    </Typography>
                    <Typography
                      sx={{ fontWeight: "bold", color: "rgba(0,0,0,0.4)" }}
                    >
                      {`${product.description}`}
                    </Typography>
                  </li>
                ))}
              </ul>
            )}
            <Box
              sx={{ display: "flex", cursor: "pointer" }}
              onClick={props.deleteItem}
            >
              <DeleteOutlinedIcon />
              <Typography sx={{ fontWeight: "bold" }}>Remove</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ textAlign: "right" }}>
          <Typography
            sx={{ fontWeight: "bold" }}
          >{`$${props.itemData.value}`}</Typography>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Typography sx={{ fontWeight: "semibold" }}>Total: </Typography>
            <Typography sx={{ fontWeight: "bold" }}>${value}</Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ width: "100%", pt: 3 }} />
    </ListItem>
  );
};

export default CartItem;
