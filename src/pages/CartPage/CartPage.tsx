import React from "react";
import { Footer, Navbar } from "../../components";
import { Cart } from "../../components/Cart";
import { Recommend } from "../../components/Recommend";

const CartPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <Recommend />
      <Footer />
    </>
  );
};

export default CartPage;
