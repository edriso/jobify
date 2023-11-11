import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
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
  EditJob,
} from './pages';
import ErrorElement from './components/ErrorElement';
import { loader as dashboardLoader } from './pages/DashboardLayout';
import { loader as allJobsLoader } from './pages/AllJobs';
import { loader as editJobLoader } from './pages/EditJob';
import { loader as adminLoader } from './pages/Admin';
import { loader as statsLoader } from './pages/Stats';
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as addJobAction } from './pages/AddJob';
import { action as editJobAction } from './pages/EditJob';
import { action as deleteJobAction } from './pages/DeleteJob';
import { action as profileAction } from './pages/Profile';

const checkDefaultTheme = () => {
  const isDarkThemeEnabled = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkThemeEnabled);
  return isDarkThemeEnabled;
};
checkDefaultTheme();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

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
        action: loginAction(queryClient),
      },
      {
        path: 'dashboard',
        element: (
          <DashboardLayout
            checkDefaultTheme={checkDefaultTheme}
            queryClient={queryClient}
          />
        ),
        loader: dashboardLoader(queryClient),
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction(queryClient),
          },
          {
            path: 'stats',
            element: <Stats />,
            loader: statsLoader(queryClient),
            errorElement: <ErrorElement />,
          },
          {
            path: 'all-jobs',
            element: <AllJobs />,
            loader: allJobsLoader(queryClient),
            errorElement: <ErrorElement />,
          },
          {
            path: 'profile',
            element: <Profile />,
            action: profileAction(queryClient),
          },
          {
            path: 'admin',
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: 'edit-job/:id',
            element: <EditJob />,
            loader: editJobLoader,
            action: editJobAction(queryClient),
            errorElement: <ErrorElement />,
          },
          {
            path: 'delete-job/:id',
            action: deleteJobAction(queryClient),
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
