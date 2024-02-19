// Outside lib
import { toast } from 'react-toastify'

interface DashboardActionParams {
  request: Request
}

export async function dashboardAction({ request }: DashboardActionParams) {
  const data = await request.formData()
  const formData = Object.fromEntries(data)

  try {
    localStorage.setItem('userName', JSON.stringify(formData.UserName))
    return toast.success(`Bem-vindo, ${formData.UserName}`)
  } catch (error) {
    throw new Error('Houve um problema ao criar a sua conta.')
  }
}
