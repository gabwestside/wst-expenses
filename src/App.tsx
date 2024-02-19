import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Outside Lib
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Loaders
import { dashboardLoader, mainLoader } from './_utils/loader'

// Actions
import { logoutAction } from './actions/logout'
import { dashboardAction } from './actions/dashboard'

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
        action: dashboardAction,
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
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}
