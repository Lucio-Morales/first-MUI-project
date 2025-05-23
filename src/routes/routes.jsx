import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../components/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

export default router;
