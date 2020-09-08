/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import PropTypes from "prop-types"
import { jsx } from "@emotion/core"
import { menuRows } from "../styling"
import Row from "./Row"

export default function MenuRows({ syllabary, type, rows, updateRows }) {
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

MenuRows.propTypes = {
  syllabary: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      syllabary: PropTypes.string,
      type: PropTypes.string,
      kanas: PropTypes.arrayOf(PropTypes.string),
      checked: PropTypes.bool,
    })
  ).isRequired,
  updateRows: PropTypes.func.isRequired,
}
