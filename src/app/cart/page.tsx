import Cart from "@/features/cart/Main";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "GameQuest | Cart ",
  description: "Order you cart..",
};

const CartPae = () => {
  return <Cart />;
};

export default CartPae;
