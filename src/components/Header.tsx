import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import CartIcon from './CartIcon';

const Header = () => {
  return (
    <header className="h-12 text-red-500 border-b-2 border-b-red-500 uppercase md:h-16">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold">
          <Link to="/">Massimo</Link>
        </div>
        <MobileMenu />
        {/* Right Links */}
        <div className="hidden md:flex gap-4 items-center justify-end">
          <Link to="/menu">Menu</Link>
          {/* <Link to="/orders">Orders</Link> */}
          <Link to="/cart">
            <CartIcon />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
