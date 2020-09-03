import React, { useState } from "react"
import PropTypes from "prop-types"

export default function MenuRow({ index, dispatch, checked, kanas }) {
  const [state, setState] = useState(checked)
  const handleClick = () => {
    setState((value) => !value)
    if (!state) dispatch({ type: "check", index })
    if (state) dispatch({ type: "uncheck", index })
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ backgroundColor: state ? "red" : "initial" }}
    >
      {kanas.map((item, i) => (
        <span key={i}>{item}</span>
      ))}
    </button>
  )
}

MenuRow.propTypes = {
  index: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  kanas: PropTypes.arrayOf(PropTypes.string).isRequired,
}
