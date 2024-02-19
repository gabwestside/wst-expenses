import { useLoaderData } from 'react-router-dom'

// Loader
import { MainLoaderDataProps } from '../_utils/loader'

// Components
import { Intro } from '../components/Intro'

export const Dashboard = () => {
  const { userName } = useLoaderData() as MainLoaderDataProps

  return <>{userName ? <p>{userName}</p> : <Intro />}</>
}
