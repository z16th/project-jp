/** @jsx jsx */
import PropTypes from "prop-types"
import { Link, useRouteMatch } from "react-router-dom"
import { jsx } from "@emotion/core"
import { linkActive, linkUnactive } from "../utils"

export default function CustomLink({ to, children }) {
  const match = useRouteMatch({ path: to.pathname, exact: to.exact })
  return (
    <Link to={to} css={match ? [linkUnactive, linkActive] : linkUnactive}>
      {children}
    </Link>
  )
}

CustomLink.propTypes = {
  to: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
}
