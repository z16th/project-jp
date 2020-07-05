import React from "react";
import SVG from "react-inlinesvg";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Icon = React.forwardRef(({ name, ...rest }, ref) => (
  <SVG
    src={require(`../utils/kanji-anim-1-80/${name}.svg`)}
    innerRef={ref}
    path={{fill: 'white'}}
    loader={<span style={{display: 'flex', justifyContent: 'center'}}><ClimbingBoxLoader /></span>}
    {...rest}
  />
));

export default Icon;