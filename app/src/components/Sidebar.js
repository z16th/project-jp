/** @jsx jsx */
import { useEffect } from "react"
import PropTypes from "prop-types"
import { jsx } from "@emotion/core"
import useContent from "../hooks/useContent"
import { scrollTo } from "../utils/vanilla"
import { sidebar } from "../utils"

export default function Sidebar({ from, select, children }) {
  const content = useContent(from, select)

  useEffect(() => {
    if (content !== null) {
      content.forEach((element, i) => {
        const header = element
        header.id = `jump-to-${i}`
      })
    }
  }, [content])

  if (content === null) return null
  return (
    <div id="sidebar" css={sidebar}>
      <div className="nav-buttons">
        {children}
        <h4>En esta página</h4>
        {content.map((header, i) => (
          <button
            key={header.innerHTML}
            type="button"
            className={`scroll-link link-${header.tagName}`}
            onClick={() => scrollTo(i)}
          >
            {header.innerHTML}
          </button>
        ))}
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  from: PropTypes.string,
  select: PropTypes.string,
  children: PropTypes.node,
}
Sidebar.defaultProps = {
  from: ".content",
  select: "h1,h2,h3,h4,h5,h6",
  children: null,
}
