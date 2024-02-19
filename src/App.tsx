import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Loaders
import { dashboardLoader, mainLoader } from './_utils/loader'

// Actions
import { logoutAction } from './actions/logout'

// Layouts
import { Main } from './layouts/Main'

// Routes
import { Dashboard } from './pages/Dashboard'
import { Error } from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
])

export function App() {
  return <RouterProvider router={router} />
}
