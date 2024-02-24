import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import Menu from './pages/Menu.tsx';
import Orders from './pages/Orders.tsx';
import Cart from './pages/Cart.tsx';
import Category from './pages/Category.tsx';
import Product from './pages/Product.tsx';
import './index.css';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu />,
      },
      {
        path: 'menu/:category',
        element: <Category />,
      },
      {
        path: 'products/:id',
        element: <Product />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
