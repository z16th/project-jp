/**@jsx jsx */
import { Link, useRouteMatch } from "react-router-dom"
import { jsx } from "@emotion/core"
import { linkActive, linkUnactive } from "../utils"

export default function CustomLink({ to, children }) {
  const match = useRouteMatch({ path: to.pathname, exact: true })
  return (
    <Link to={to} css={match ? linkActive : linkUnactive}>
      {children}
    </Link>
  )
}
