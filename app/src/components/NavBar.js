/**@jsx jsx */
import { Fragment } from "react"
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import CustomLink from "./CustomLink"
import { navbar, navbarEmpty } from "../utils"

export default function NavBar({ id, links, path }) {
  return (
    <Fragment>
      <div id="navbar-empty" css={navbarEmpty} />
      <nav id={id} css={navbar}>
        {links.map(({ to, children }) => (
          <CustomLink
            className="noselect"
            key={`${id}-${to}`}
            to={{ pathname: path + to }}
            exact={true}
          >
            {children}
          </CustomLink>
        ))}
      </nav>
    </Fragment>
  )
}

NavBar.propTypes = {
  id: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  path: PropTypes.string,
  color: PropTypes.objectOf(PropTypes.string),
}

NavBar.defaultProps = {
  path: "",
  className: "",
  color: {},
}
