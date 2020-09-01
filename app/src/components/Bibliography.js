/** @jsx jsx */
/** @jsxFrag React.Fragment */
// eslint-disable-next-line no-unused-vars
import React from "react"
import PropTypes from "prop-types"
import { jsx } from "@emotion/core"

export default function Bibliography({ children }) {
  return (
    <section className="bibliography">
      <hr />
      {children}
    </section>
  )
}

Bibliography.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
