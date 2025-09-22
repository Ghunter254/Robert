// src/components/Cart/useCart.ts
import { useContext } from "react";
import { CartContext, type CartContextType } from "./CartContext";

export const useCart = (): CartContextType => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return ctx;
};
