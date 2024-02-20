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
      className="p-4 flex justify-between items-center gap-4"
    >
      <div className="flex gap-4 items-center">
        <img src={imageURL} alt="" className="w-14 h-14 object-cover" />
        <div>
          <h3 className="font-bold">{title}</h3>
          <span className="text-sm text-gray-800">{cartItem.size}</span>
          <span className="text-sm text-gray-800"> x{cartItem.quantity}</span>
        </div>
      </div>

      <div className="flex gap-4">
        <span>{numberFormatter.format(cartItem.totalPrice)}</span>
        <button className="text-3xl" onClick={() => removeItem(cartItem.id)}>
          <img src="/close.png" className="w-4" alt="" />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
