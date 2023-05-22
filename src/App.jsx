import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import GamePage from './pages/Game';
import ErrorPage from './pages/Error';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/game', element: <GamePage /> }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
