import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  DashboardLayout,
  Register,
  Login,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
} from './pages';
import { action as registerAction } from './pages/Register';

const checkDefaultTheme = () => {
  const isDarkThemeEnabled = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkThemeEnabled);
  return isDarkThemeEnabled;
};
checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout checkDefaultTheme={checkDefaultTheme} />,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          {
            path: 'stats',
            element: <Stats />,
          },
          {
            path: 'all-jobs',
            element: <AllJobs />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'admin',
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
