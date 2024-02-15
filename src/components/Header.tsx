import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import Cart from './Cart';

const Header = () => {
  return (
    <header className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-16 md:px-12">
      {/* Logo */}
      <div className="text-xl md:font-bold">
        <Link to="/">Massimo</Link>
      </div>

      <MobileMenu />

      {/* Right Links */}
      <div className="hidden md:flex gap-4 items-center justify-end">
        <Link to="/menu">Menu</Link>
        <Link to="/orders">Orders</Link>
        <Cart />
      </div>
    </header>
  );
};

export default Header;
