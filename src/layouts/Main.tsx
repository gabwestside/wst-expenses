import { Outlet, useLoaderData } from 'react-router-dom'

// Components
import { Nav } from '../components/Nav'

// assets
import wave from '../assets/wave.svg'
import { MainLoaderDataProps } from '../_utils/loader'

export const Main = () => {
  const { userName } = useLoaderData() as MainLoaderDataProps

  return (
    <div className='layout'>
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img alt='imgFooter' src={wave} />
    </div>
  )
}
