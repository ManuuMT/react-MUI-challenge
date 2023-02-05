import { CartItemProps, CartItemType } from "../../models";
import xmasPack from "../../assets/img/xmasPack.png";

export const categoriesList = [
  "All products",
  "Packaging",
  "Drinkware",
  "Apparel",
  "Notebooks",
  "Backpacks",
];

export const cartItemsArray: CartItemProps[] = [
  {
    name: "My Christmas pack",
    type: CartItemType.Pack,
    id: "1",
    value: 71.2,
    image: {
      src: xmasPack,
      alt: "x-mas pack",
    },
    content: [
      {
        name: "Cardborad box",
        description: "(container)",
        type: CartItemType.Product,
        id: "4",
      },
      {
        name: "Unisex Short Sleeve T-Shirt",
        description: "(Green, Small)",
        type: CartItemType.Product,
        id: "5",
      },
      {
        name: "Basic bottle",
        description: "(Blue)",
        type: CartItemType.Product,
        id: "6",
      },
    ],
  },
  {
    name: "Basic T-Shirt",
    value: 13.5,
    type: CartItemType.Product,
    id: "2",
  },
  {
    name: "Woman bottle",
    value: 36.5,
    type: CartItemType.Product,
    id: "3",
  },
];
