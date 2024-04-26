import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layouts from '../Layouts';
import Main from '../pages/Main';
import About from '../pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      {
        index: true,
        path: '/',
        element: <Main />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

const Routers = () => {
  return <RouterProvider router={router} />;
};

export default Routers;
