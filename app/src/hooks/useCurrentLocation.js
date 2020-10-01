import { useEffect } from "react"
import { useHistory, useLocation } from "react-router-dom"
import queryString from "query-string"

export default function usePagesQuery({ pageLimit }) {
  const history = useHistory()
  const { search } = useLocation()
  const { pagina } = queryString.parse(search, { parseNumbers: true })

  useEffect(() => {
    if (pagina === undefined || pagina < 0 || pagina > pageLimit) {
      history.replace("?pagina=1")
    }
  }, [pagina, history, pageLimit])

  return pagina
}
