import { Suspense, lazy } from 'react';
import { Link, createBrowserRouter, RouterProvider } from 'react-router-dom';

import Loader from './components/loader';
import Home from './pages/home';

const Layout = lazy(() => import('./layout'));

export function App() {
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'page-2',
        element: (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        ),
      },
    ],
  },
]);
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
