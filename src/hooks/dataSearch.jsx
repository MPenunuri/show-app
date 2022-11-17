import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import fetcher from '../services/fetcher.js'

export default function dataSearch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const search = async () => {
    try {
      const req = await fetcher(url)
      setData(req)
    } catch (error) {
      setError(String(error))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    search()
  }, [url])

  useEffect(() => {
    if (error !== '') toast.error(error)
  }, [error])

  return { data, loading, error }
}
