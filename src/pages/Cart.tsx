import { useShoppingCart } from '../contexts/useShoppingCart';
import { getProductById } from '../lib/data';
// import { numberFormatter } from '../util/number-formatter';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems } = useShoppingCart();
  return (
    <div className="container flex flex-col gap-8 md:flex-row">
      {/* cart items */}
      {cartItems.length > 0 ? (
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
      ) : (
        <div>
          <p className="text-3xl text-slate-600 mb-4">
            Your cart is feeling a bit lonely,
          </p>
          <p className="text-lg text-slate-700 mb-8">
            Explore our menu and add some delicious items to fill it up!
          </p>
          <Link to="/menu" className="text-red-600 hover:underline">
            Check out the Menu
          </Link>
        </div>
      )}

      {/* PAYMENT CONTAINER */}
      {cartItems.length > 0 && (
        <div className="p-4 bg-fuchsia-50 flex flex-col gap-4 md:w-[30%]">
          <div className="flex justify-between">
            <span className="">Subtotal (3 items)</span>
            <span className="">$81.70</span>
          </div>
          <div className="flex justify-between">
            <span className="">Service Cost</span>
            <span className="">$0.00</span>
          </div>
          <div className="flex justify-between">
            <span className="">Delivery Cost</span>
            <span className="text-green-500">FREE!</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <span className="">TOTAL(INCL. VAT)</span>
            <span className="font-bold">$81.70</span>
          </div>
          <button className="bg-red-500 text-white p-3 rounded-md self-end">
            CHECKOUT
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
