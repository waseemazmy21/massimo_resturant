import Notification from './components/Notification';
import Header from './components/Header';
// import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import ShoppingCartProvider from './contexts/shoppingCartContext';

const App = () => {
  return (
    <ShoppingCartProvider>
      <div className="min-h-screen flex flex-col">
        <Notification />
        <Header />
        <Outlet />
      </div>
      {/* <Footer /> */}
    </ShoppingCartProvider>
  );
};

export default App;
