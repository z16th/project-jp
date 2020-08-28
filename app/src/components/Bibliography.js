/** @jsx jsx */
/** @jsxFrag React.Fragment */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { jsx } from "@emotion/core"

export default function Bibliography({ children }) {
  return (
    <section className="bibliography">
      <hr></hr>
      {children}
    </section>
  )
}
