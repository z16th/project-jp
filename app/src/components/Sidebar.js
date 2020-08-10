/** @jsx jsx */
/** @jsxFrag React.Fragment */
// eslint-disable-next-line  no-unused-vars
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { jsx } from "@emotion/core"
import PageNav from "./PageNav"
import useContent from "../hooks/useContent"
import HamburgerMenu from "./HamburgerMenu"
import { sidebar } from "../styling"

export default function Sidebar({ from, select, children }) {
  const content = useContent(from, select)
  const [state, setState] = useState(false)

  useEffect(() => {
    if (content !== null) {
      content.forEach((element, i) => {
        const header = element
        header.id = `jump-to-${i}`
      })
    }
  }, [content])

  return (
    <>
      <HamburgerMenu controller={{ state, setState }}>
        <PageNav content={content}>{children}</PageNav>
      </HamburgerMenu>

      <div id="sidebar" css={sidebar}>
        <PageNav content={content}>{children}</PageNav>
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
