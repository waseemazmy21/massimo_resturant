import { numberFormatter } from '../util/number-formatter';
import { ShoppingCartItem } from '../contexts/types';
import { useShoppingCart } from '../contexts/useShoppingCart';

type CartItemProps = {
  cartItem: ShoppingCartItem;
  imageURL: string;
  title: string;
};

const CartItem = ({ cartItem, imageURL, title }: CartItemProps) => {
  const { removeItem } = useShoppingCart();
  return (
    <li
      key={cartItem.id}
      className="p-4 flex items-center justify-between gap-4 text-red-500"
    >
      <img src={imageURL} alt="" className="w-20 h-20 object-cover" />
      <div>
        <h3 className="uppercase text-xl font-bold">{title}</h3>
        <span>{cartItem.size}</span>
        <span className="text-sm"> x {cartItem.quantity}</span>
      </div>

      <span>{numberFormatter.format(cartItem.totalPrice)}</span>
      <button className="text-3xl" onClick={() => removeItem(cartItem.id)}>
        <img src="/close.png" className="w-4" alt="" />
      </button>
    </li>
  );
};

export default CartItem;
