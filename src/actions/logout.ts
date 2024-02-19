import { redirect } from 'react-router-dom'

// Outside Lib
import { toast } from 'react-toastify'

// Helpers
import { deleteItem } from '../_utils/helpers'

export async function logoutAction() {
  // delete user
  deleteItem({
    key: 'userName',
  })

  toast.success("Você excluiu sua conta!")

  // return redirect
  return redirect('/')
}
