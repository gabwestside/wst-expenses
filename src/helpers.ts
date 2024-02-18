// Local storage
export const fetchData = (key: string): string | null => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null
}
