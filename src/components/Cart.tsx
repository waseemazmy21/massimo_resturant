import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <Link to="cart" className="flex items-center gap-4">
      <img src="/cart.png" alt="" className="w-8 h-8 md:w-5 md:h-5" />
      <span>Cart (3)</span>
    </Link>
  );
};

export default Cart;
