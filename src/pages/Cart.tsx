import { useShoppingCart } from '../contexts/useShoppingCart';
import { getProductById } from '../lib/data';
import { numberFormatter } from '../util/number-formatter';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getNumberOfItems, getTotal, checkout } = useShoppingCart();

  if (cartItems.length === 0) {
    return (
      <div className="container flex-1 flex flex-col justify-center items-center">
        <p className="text-3xl text-slate-600 mb-4">Your cart is empty,</p>
        <Link to="/menu" className="text-red-600 hover:underline">
          Check out the Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="container flex flex-col gap-8 md:flex-row md:items-start">
      {/* cart items */}

      <ul className="flex-grow flex flex-col divide-y divide-y-red-500 divide-red-500">
        {cartItems.map((cartItem) => {
          const product = getProductById(cartItem.productId);
          if (!product) return;

          return (
            <CartItem
              cartItem={cartItem}
              imageURL={product.imageURL}
              title={product.title}
            />
          );
        })}
      </ul>
      {/* PAYMENT CONTAINER */}
      <div className="p-4 bg-fuchsia-50 flex flex-col gap-4 md:w-[35%]">
        <div className="flex justify-between">
          <span className="">Subtotal ({getNumberOfItems()} items)</span>
          <span className="">{numberFormatter.format(getTotal())}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">{numberFormatter.format(0)}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">
            {numberFormatter.format(getTotal())}
          </span>
        </div>
        <button
          className="bg-red-500 text-white p-3 rounded-md self-end"
          onClick={checkout}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
