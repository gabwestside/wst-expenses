// Local storage
export const fetchData = (key: string): string | null => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null
}

// Delete item
export const deleteItem = ({ key }: { key: string }): void => {
  console.log(key)
  localStorage.removeItem(key)
}
