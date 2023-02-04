import { CartItemProps, CartItemType } from "../../models";

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
    content: [
      {
        name: "Cardborad box",
        description: "(container)",
        type: CartItemType.Product,
      },
      {
        name: "Unisex Short Sleeve T-Shirt",
        description: "(Green, Small)",
        type: CartItemType.Product,
      },
      {
        name: "Basic bottle",
        description: "(Blue)",
        type: CartItemType.Product,
      },
    ],
    value: 71.2,
  },
  {
    name: "Basic T-Shirt",
    value: 13.5,
    type: CartItemType.Product,
  },
  {
    name: "Woman bottle",
    value: 36.5,
    type: CartItemType.Product,
  },
];
