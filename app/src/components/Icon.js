import React from "react";
import SVG from "react-inlinesvg";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Icon = React.forwardRef(({ name, ...rest }, ref) => (
  <SVG
    src={require(`../utils/svg-animations/${name}.svg`)}
    innerRef={ref}
    loader={<span style={{display: 'flex', justifyContent: 'center'}}><ClimbingBoxLoader /></span>}
    {...rest}
  />
));

export default Icon;