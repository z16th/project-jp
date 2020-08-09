import { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"

export default function useContent(
  from = ".content",
  select = "h1,h2,h3,h4,h5,h6"
) {
  const [content, setContent] = useState(null)
  const query = useRef(null)

  useEffect(() => {
    query.current = document.querySelector(from).querySelectorAll(select)
  }, [from, select])

  useEffect(() => {
    setContent([...query.current])
  }, [])

  return content
}

useContent.propTypes = {
  from: PropTypes.string,
  select: PropTypes.string,
}
