/** @jsx jsx */
/** @jsxFrag React.Fragment */
// eslint-disable-next-line  no-unused-vars
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { jsx } from "@emotion/core"
import NavPage from "./NavPage"
import useNodes from "../hooks/useNodes"
import HamburgerMenu from "./HamburgerMenu"
import { slug } from "../utils/vanilla"
import { sidebar } from "../styling"

export default function Sidebar({ from, select, children }) {
  const content = useNodes(from, select)
  const [state, setState] = useState(false)

  useEffect(() => {
    if (content !== null) {
      content.forEach((element, i) => {
        const header = element
        header.id = `${i}-${slug(header.textContent)}`
      })
    }
  }, [content])

  if (content === null) return null

  return (
    <>
      <HamburgerMenu controller={{ state, setState }}>
        <NavPage content={content}>{children}</NavPage>
      </HamburgerMenu>

      <div id="sidebar" css={sidebar}>
        <NavPage content={content}>{children}</NavPage>
      </div>
    </>
  )
}

Sidebar.propTypes = {
  from: PropTypes.string,
  select: PropTypes.string,
  children: PropTypes.node,
}
Sidebar.defaultProps = {
  from: ".content",
  select: "h1,h2,h3,h4,h5,h6",
  children: null,
}
