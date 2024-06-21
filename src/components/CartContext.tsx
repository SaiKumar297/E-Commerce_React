import React, { createContext, useState, ReactNode } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  color:string;
  img:string;
}

interface CartContextProps {
  cartItems: Product[];
  addToCart: (product: Product) => void;
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
