import { fetchData } from './helpers'

export interface MainLoaderDataProps {
  userName: string | null
}

export function mainLoader(): MainLoaderDataProps {
  const userName = fetchData('userName')
  return { userName }
}

export function dashboardLoader(): MainLoaderDataProps {
  const userName = fetchData('userName')
  return { userName }
}
