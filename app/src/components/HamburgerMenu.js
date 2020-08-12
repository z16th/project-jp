/** @jsx jsx */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types"
import { jsx } from "@emotion/core"
import { hamburgerMenu } from "../styling"

export default function HamburgerMenu({ controller, children }) {
  const { state, setState } = controller

  const toggle = () => {
    setState((value) => !value)
  }

  const deactivate = () => {
    setState(false)
  }

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      deactivate()
    }
  }

  return (
    <div id="hamburger-menu" css={hamburgerMenu}>
      <button
        type="button"
        className="hamburger"
        onClick={toggle}
        onKeyDown={handleKeyDown}
      >
        {state ? (
          <img
            src="https://img.icons8.com/ios-filled/20/000000/minus-math.png"
            alt="botón - abrir menú"
          />
        ) : (
          <img
            src="https://img.icons8.com/ios-filled/20/000000/plus-math.png"
            alt="botón - cerrar menú"
          />
        )}
      </button>
      <div
        tabIndex="-1"
        role="button"
        className="menu"
        onClick={deactivate}
        style={state ? { display: "inherit" } : { display: "none" }}
      >
        {children}
      </div>
    </div>
  )
}

HamburgerMenu.propTypes = {
  controller: PropTypes.shape({
    state: PropTypes.bool,
    setState: PropTypes.func,
  }).isRequired,
  children: PropTypes.node,
}

HamburgerMenu.defaultProps = {
  children: null,
}
