import { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"

export default function useContent(
  from = ".content",
  select = "h1,h2,h3,h4,h5,h6"
) {
  const location = useLocation()
  const query = useRef(null)
  const [content, setContent] = useState(null)

  useEffect(() => {
    query.current = document.querySelector(from).querySelectorAll(select)
    if (query.current !== null) {
      setContent([...query.current])
    }
  }, [location, from, select])

  return content
}

useContent.propTypes = {
  from: PropTypes.string.isRequired,
  select: PropTypes.string.isRequired,
}
