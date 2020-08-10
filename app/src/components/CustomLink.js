/** @jsx jsx */
import PropTypes from "prop-types"
import { Link, useRouteMatch } from "react-router-dom"
import { jsx } from "@emotion/core"
import { linkActive, linkUnactive } from "../styling"

export default function CustomLink({ to, children }) {
  const match = useRouteMatch({ path: to.pathname, exact: to.exact })
  return (
    <Link to={to} css={match ? [linkUnactive, linkActive] : linkUnactive}>
      {children}
    </Link>
  )
}

CustomLink.propTypes = {
  to: PropTypes.shape({ pathname: PropTypes.string, exact: PropTypes.bool })
    .isRequired,
  children: PropTypes.node.isRequired,
}
