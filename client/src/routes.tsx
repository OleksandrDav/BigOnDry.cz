import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
// import Products from './pages/Products/Products';
// import ProductDetails from './pages/Products/ProductDetails'; // Новый компонент
// import News from './pages/News/News';
// import About from './pages/About/About';
// import Contacts from './pages/Contacts/Contacts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    //   {
    //     path: '/products',
    //     children: [
    //       {
    //         index: true,
    //         element: <Products />,
    //       },
    //       {
    //         path: ':productId',
    //         element: <ProductDetails />,
    //       },
    //     ],
    //   },
    //   {
    //     path: '/news',
    //     element: <News />,
    //   },
    //   {
    //     path: '/about',
    //     element: <About />,
    //   },
    //   {
    //     path: '/contacts',
    //     element: <Contacts />,
    //   },
    ],
  },
]);