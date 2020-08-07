/** @jsx jsx */
/** @jsxFrag React.Fragment */
// eslint-disable-next-line no-unused-vars
import { React } from "react"
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import CustomLink from "./CustomLink"
import { navbar, navbarEmpty } from "../utils"

export default function NavBar({ id, links, path }) {
  return (
    <>
      <div id="navbar-empty" css={navbarEmpty} />
      <nav id={id} css={navbar}>
        {links.map(({ to, children }) => (
          <CustomLink
            className="noselect"
            key={`${id}-${to}`}
            to={{ pathname: path + to }}
            exact
          >
            {children}
          </CustomLink>
        ))}
      </nav>
    </>
  )
}

NavBar.propTypes = {
  id: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({ to: PropTypes.string, children: PropTypes.node })
  ).isRequired,
  path: PropTypes.string,
}

NavBar.defaultProps = {
  path: "",
}
