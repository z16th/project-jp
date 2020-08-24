/** @jsx jsx */
/** @jsxFrag React.Fragment */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import CustomLink from "./CustomLink"
import { navbar, navbarEmpty } from "../styling"

export default function NavBar({ id, links, path }) {
  return (
    <>
      <div id="navbar-empty" css={navbarEmpty} />

      <nav id={id} css={navbar}>
        {links.map(({ to, exact, label, Icon }) => (
          <CustomLink
            className="nav-button noselect"
            key={`${id}-${to}`}
            to={{ pathname: path + to, exact }}
            exact
          >
            {Icon !== null ? <Icon /> : null}
            {label !== null ? <span>{label}</span> : null}
          </CustomLink>
        ))}
      </nav>
    </>
  )
}

NavBar.propTypes = {
  id: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      exact: PropTypes.bool,
      label: PropTypes.string,
      Icon: PropTypes.object,
    })
  ).isRequired,
  path: PropTypes.string,
}

NavBar.defaultProps = {
  path: "",
}
