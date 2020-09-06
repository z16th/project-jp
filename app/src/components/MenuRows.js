/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { jsx } from "@emotion/core"
import { menuRows } from "../styling"
import Row from "./Row"

export default function MenuRows({ rows, updateRows, syllabary, type }) {
  return (
    <div className="menu-rows" css={menuRows}>
      {rows.map((currentRow, i) =>
        currentRow.syllabary === syllabary && currentRow.type === type ? (
          <Row
            key={i}
            index={i}
            syllabary={syllabary}
            rows={rows}
            updateRows={updateRows}
          />
        ) : null
      )}
      {syllabary === "hiragana" && type === "extended" ? (
        <h2 style={{ height: "400px" }}>No contiene extendido</h2>
      ) : null}
    </div>
  )
}
