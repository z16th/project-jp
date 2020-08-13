import { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"

export default function useContent(from, select) {
  const location = useLocation()
  const query = useRef(null)
  const [content, setContent] = useState([])

  useEffect(() => {
    if (query.current !== null) {
      query.current = document.querySelector(from).querySelectorAll(select)
      setContent([...query.current])
    }
  }, [location, from, select])

  return content
}

useContent.propTypes = {
  from: PropTypes.string.isRequired,
  select: PropTypes.string.isRequired,
}
