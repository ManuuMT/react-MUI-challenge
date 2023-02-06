import React from "react";
import { Navbar } from "../../components";
import { Cart } from "../../components/Cart";
import { Recommend } from "../../components/Recommend";

const CartPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <Recommend />
    </>
  );
};

export default CartPage;
