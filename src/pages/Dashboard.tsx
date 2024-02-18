import { useLoaderData } from 'react-router-dom'
import { fetchData } from '../helpers'

interface DashboardLoaderDataProps {
  userName?: string | null
}

export function dashboardLoader(): DashboardLoaderDataProps {
  const userName = fetchData('userName')
  return { userName }
}

export const Dashboard: React.FC = () => {
  const { userName } = useLoaderData() as DashboardLoaderDataProps

  return (
    <div>
      <h1>{userName}</h1>
      Dashboard
    </div>
  )
}
