import Notification from './components/Notification';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Notification />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
