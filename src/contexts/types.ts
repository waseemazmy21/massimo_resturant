// types.ts
export type ShoppingCartItem = {
  id: string;
  productId: string;
  size: string;
  quantity: number;
  totalPrice: number;
};

export type ShoppingCartContextType = {
  cartItems: ShoppingCartItem[];
  addItem: (
    productId: string,
    size: string,
    quantity: number,
    totalPrice: number
  ) => void;
  removeItem: (id: string) => void;
};
