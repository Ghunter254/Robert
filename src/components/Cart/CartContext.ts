// src/components/Cart/CartContext.ts
import { createContext } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  material?: string;
  color?: string;
  scale?: number;
  shipping?: string;
};

export type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

// ✅ Just export the context (no component here)
export const CartContext = createContext<CartContextType | undefined>(undefined);
