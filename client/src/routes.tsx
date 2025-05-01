import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Company from './pages/Company/Company';
import Product from './pages/Product/Product';
import WoodDrying from './pages/Insights/WoodDrying/WoodDrying';
import Ispm15 from './pages/Insights/Ispm15/Ispm15';
import ThermoModification from './pages/Insights/ThermoModification/ThermoModification';
import Vaporization from './pages/Insights/Vaporization/Vaporization';

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
      },
      {
        path: '/insights/wood-drying',
        element: <WoodDrying />,
      },
      {
        path: '/insights/ispm15',
        element: <Ispm15 />,
      },
      {
        path: '/insights/thermo-modification',
        element: <ThermoModification />,
      },
      {
        path: '/insights/vaporization',
        element: <Vaporization />,
      }
    ],
  },
]);