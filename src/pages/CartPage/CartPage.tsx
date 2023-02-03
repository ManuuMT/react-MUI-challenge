import React from "react";
import { Navbar } from "../../components";
import { Cart } from "../../components/Cart";

const CartPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Cart />
    </>
  );
};

export default CartPage;
