import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ShoppingCartItem, ShoppingCartContextType } from './types';

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

export const shoppingCartContext = createContext({} as ShoppingCartContextType);

const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<ShoppingCartItem[]>([]);

  function addItem(
    productId: string,
    size: string,
    quantity: number,
    totalPrice: number
  ) {
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      {
        id: uuidv4(),
        productId,
        size,
        quantity,
        totalPrice,
      },
    ]);
  }

  function removeItem(id: string) {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
  }

  return (
    <shoppingCartContext.Provider value={{ cartItems, addItem, removeItem }}>
      {children}
    </shoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
