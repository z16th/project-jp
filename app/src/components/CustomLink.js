import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "@emotion/styled";

const ListItemStyled = styled.li`
  font-weight: bold;
  text-decoration: none;
`;
export function CustomLink({ to, children }) {
  const match = useRouteMatch(to.pathname);
  if (match)
    return (<ListItemStyled>
      <Link to={to}>{children}</Link>
    </ListItemStyled>);
  return (<li>
    <Link to={to}>{children}</Link>
  </li>);
}
