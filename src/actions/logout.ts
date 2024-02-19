import { redirect } from 'react-router-dom'

// Helpers
import { deleteItem } from '../_utils/helpers'

export async function logoutAction() {
  // delete user
  deleteItem({
    key: 'userName',
  })

  // return redirect
  return redirect('/')
}
