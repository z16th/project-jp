/**@jsx jsx */
import PropTypes from "prop-types"
import { scrollTo, slug } from "../utils/vanilla"
import { jsx } from "@emotion/core"
import { navSidebar } from "../styling"

export default function NavSidebar({ content, children }) {
  return (
    <div className="nav-sidebar" css={navSidebar}>
      <div className="children">{children}</div>
      <h4>En esta página</h4>
      {content !== null
        ? content.map((header, i) => (
            <button
              key={header.innerHTML + i}
              type="button"
              className={`scroll-link link-${header.tagName}`}
              onClick={() => scrollTo(`${slug(header.innerHTML)}-${i}`)}
            >
              {header.innerHTML}
            </button>
          ))
        : null}
    </div>
  )
}

NavSidebar.propTypes = {
  content: PropTypes.arrayOf(PropTypes.node).isRequired,
  children: PropTypes.node,
}

NavSidebar.defaultProps = {
  children: null,
}
