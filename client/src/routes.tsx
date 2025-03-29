import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Company from './pages/Company/Company';
import Product from './pages/Product/Product';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/company',
        element: <Company />,
      },
      {
        path: '/products/:productName/:id',
        element: <Product />,
      }
    ],
  },
]);