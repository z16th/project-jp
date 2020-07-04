import React from "react";
import SVG from "react-inlinesvg";

const Icon = React.forwardRef(({ name, ...rest }, ref) => (
  <SVG
    src={require(`../utils/kanji-anim-1-80/${name}.svg`)}
    innerRef={ref}
    {...rest}
  />
));

export default Icon;