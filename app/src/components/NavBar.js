import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./styles/NavBar.css"

export default function NavBar({ id, links, path, compensate, className }) {
  return (
    <React.Fragment>
      <nav id={id} className={`navbar ${className}`}>
        {links.map(({ to, children }) => (
          <Link key={`${id}-${to}`} to={`${path}${to}`}>
            {children}
          </Link>
        ))}
      </nav>
      {compensate && <div className="empty"></div>}
    </React.Fragment>
  )
}

NavBar.propTypes = {
  id: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  path: PropTypes.string,
  compensate: PropTypes.bool,
  className: PropTypes.string,
}

NavBar.defaultProps = {
  path: "",
  compensate: false,
  className: "",
}
