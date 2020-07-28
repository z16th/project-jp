import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import { blue, secondaryFont } from "../utils"

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items:  center;
  height: 48px;
  width: 100%;
  background-color: ${props => props.primaryColor};
  > .link{
    height: 28px;
    font-family: ${secondaryFont};
    background-color: ${props => props.secondaryColor};
    text-decoration: none;
    color: black;
  }
`

export default function NavBar({ id, links, path, primaryColor, secondaryColor }) {
  return (
    <Navbar id={id} primaryColor={primaryColor} secondaryColor={secondaryColor}>
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
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string
}

NavBar.defaultProps = {
  path: "",
  className: "",
  primaryColor: blue.regular,
  secondaryColor: blue.light
}
