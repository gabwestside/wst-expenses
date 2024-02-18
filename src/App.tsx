import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Routes
import { Dashboard, dashboardLoader } from './pages/Dashboard'
import { Error } from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    loader: dashboardLoader,
    errorElement: <Error />
  }
])

export function App() {
  return <RouterProvider router={router} />
}
