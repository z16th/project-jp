import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import { secondaryFont } from "../utils"

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 48px;
  width: 100%;
  background-color: ${(props) => props.color.regular};
  > .link {
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
    height: 28px;
    padding: 0px 8px 0px;
    border-radius: 4px;
    font-family: ${secondaryFont};
    background-color: ${(props) => props.color.light};
    text-decoration: none;
    color: black;
    &:hover {
      background-color: ${(props) => props.color.dark};
    }
  }
`

export default function NavBar({ id, links, path, color, style }) {
  return (
    <Navbar id={id} color={color} style={style}>
      {links.map(({ to, children }) => (
        <Link className="link" key={`${id}-${to}`} to={`${path}${to}`}>
          {children}
        </Link>
      ))}
    </Navbar>
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
