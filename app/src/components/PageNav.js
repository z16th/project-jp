import React from "react"
import PropTypes from "prop-types"
import { scrollTo } from "../utils/vanilla"

export default function PageNav({ content, children }) {
  return (
    <div className="nav-buttons">
      {children}
      <h4>En esta página</h4>
      {content !== null
        ? content.map((header, i) => (
            <button
              key={header.innerHTML}
              type="button"
              className={`scroll-link link-${header.tagName}`}
              onClick={() => scrollTo(i)}
            >
              {header.innerHTML}
            </button>
          ))
        : null}
    </div>
  )
}

PageNav.propTypes = {
  content: PropTypes.arrayOf(PropTypes.node).isRequired,
  children: PropTypes.node,
}

PageNav.defaultProps = {
  children: null,
}
