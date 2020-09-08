/** @jsx jsx */
/** @jsxFrag React.Fragment */
/* eslint react/no-array-index-key: 0 */
// eslint-disable-next-line no-unused-vars
import React from "react"
import PropTypes from "prop-types"
import { jsx } from "@emotion/core"
import { scrollTo, slug } from "../utils/vanilla"
import { pageNav } from "../styling"

export default function PageNav({ content, children }) {
  return (
    <div className="nav-sidebar" css={pageNav}>
      <div className="children">{children}</div>
      {content !== null && content.length > 0 ? (
        <>
          <h4>En esta página</h4>
          {content.map((header, i) => (
            <button
              key={`${i}-${header.textContent}`}
              type="button"
              className={`scroll-link link-${header.tagName}`}
              onClick={() => scrollTo(`${i}-${slug(header.textContent)}`)}
            >
              {header.textContent}
            </button>
          ))}
        </>
      ) : null}
    </div>
  )
}

PageNav.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.node, PropTypes.shape([])])
  ),
  children: PropTypes.node,
}

PageNav.defaultProps = {
  content: [],
  children: null,
}
