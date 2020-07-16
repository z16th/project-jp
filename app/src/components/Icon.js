import React from "react"
import PropTypes from "prop-types"
import SVG from "react-inlinesvg"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"

const Icon = React.forwardRef(({ name }, ref) => (
  <SVG
    src={require(`../utils/svg-animations/${name}.svg`)} //eslint-disable-line import/no-dynamic-require
    innerRef={ref}
    loader={
      <span style={{ display: "flex", justifyContent: "center" }}>
        <ClimbingBoxLoader />
      </span>
    }
  />
))

export default Icon

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}
