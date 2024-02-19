import { useContext } from 'react';
import { shoppingCartContext } from './shoppingCartContext';

export function useShoppingCart() {
  return useContext(shoppingCartContext);
}
