import React from "react"
import PropTypes from "prop-types"
import SVG from "react-inlinesvg"
import SyncLoader from "react-spinners/SyncLoader"

const Icon = React.forwardRef(({ name, ...rest }, ref) => (
  <SVG
    // eslint-disable-next-line
    src={require(`../utils/svg-animations/${name}.svg`)} // no-global-require
    innerRef={ref}
    loader={
      <span style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
        <SyncLoader />
      </span>
    }
    {...rest} // eslint-disable-line react/jsx-props-no-spreading
  />
))

export default Icon

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}
