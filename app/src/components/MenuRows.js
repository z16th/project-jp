/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react"
import { jsx } from "@emotion/core"
import { menuRows } from "../styling"

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

function Row({ index, syllabary, rows, updateRows }) {
  const [state, setState] = useState(rows[index].checked)

  useEffect(() => {
    setState(rows[index].checked)
  }, [index, rows])

  return (
    <button
      key={index}
      type="button"
      onClick={() => updateRows([index], !rows[index].checked)}
      className={`row ${syllabary} ${state ? "selected" : ""}`}
    >
      {rows[index].kanas.map((item, i) => (
        <h3 key={i} className="char">
          {item}
        </h3>
      ))}
    </button>
  )
}
