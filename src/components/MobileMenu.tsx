import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './CartIcon';

const links = [
  { id: 1, title: 'Homepage', url: '/' },
  { id: 2, title: 'Menu', url: '/menu' },
  // { id: 3, title: 'Orders', url: '/orders' },
] as const;

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }
  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)}>
        <img
          src={open ? 'close.png' : '/open.png'}
          alt=""
          className="w-5 h-5 object-cover"
        />
      </button>

      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col justify-center text-3xl z-10">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.url}
              onClick={closeMenu}
              className="hover:bg-red-600 text-center p-4"
            >
              {link.title}
            </Link>
          ))}
          <Link
            to="/cart"
            onClick={closeMenu}
            className="flex justify-center p-4 hover:bg-red-600"
          >
            <Cart />
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
