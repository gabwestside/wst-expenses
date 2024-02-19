import { useLoaderData } from 'react-router-dom'
import { MainLoaderDataProps } from '../_utils/loader'

export const Dashboard = () => {
  const { userName } = useLoaderData() as MainLoaderDataProps

  return (
    <div>
      <h1>{userName}</h1>
      Dashboard
    </div>
  )
}
