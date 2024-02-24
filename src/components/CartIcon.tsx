import { useShoppingCart } from '../contexts/useShoppingCart';
import cart from '/cart.png';

const CartIcon = () => {
  const { getNumberOfItems } = useShoppingCart();
  return (
    <div className="flex items-center gap-4">
      <img src={cart} alt="" className="w-8 h-8 md:w-5 md:h-5" />
      <span>Cart ({getNumberOfItems()})</span>
    </div>
  );
};

export default CartIcon;
