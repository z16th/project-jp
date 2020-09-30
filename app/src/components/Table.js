/** @jsx jsx */
/** @jsxFrag React.Fragment */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import PropTypes from "prop-types"
import { jsx } from "@emotion/core"
import kanas from "../utils/json/kana-all.json"
import headers from "../utils/json/headers-all.json"
import { generateGridAreas } from "../utils/vanilla"
import { KanaTable, TableHeader, fontHandler } from "../styling"

import TableChars from "./TableChars"
import { ReactComponent as Left } from "../utils/icons/icons8-left.svg"
import { ReactComponent as Right } from "../utils/icons/icons8-right.svg"

const gridAreas = {
  basic: {
    rows: 12,
    columns: 6,
    columnSize: "min-content",
  },
  diacritic: {
    rows: 6,
    columns: 6,
    columnSize: "min-content",
  },
  combination: {
    rows: 14,
    columns: 4,
    columnSize: "max-content",
  },
  extended: {
    rows: 16,
    columns: 6,
    columnSize: "max-content",
  },
}

const fonts = [
  "Noto Sans JP",
  "Mk POP",
  "Asobi Memogaki",
  "Komorebi Gothic",
  "Umeboshi",
]

export default function Table({ syllabary, type }) {
  const [renderAnimations, setRenderAnimations] = useState(false)
  const canRenderAnimations = renderAnimations && syllabary !== "romaji"
  const [currentFont, setFont] = useState(0)

  const toggleAnimations = () => {
    setRenderAnimations((state) => !state)
  }

  const handleClick = (value) => {
    if (value === 1) {
      setFont((index) => (index + value) % fonts.length)
    }
    if (value === -1) {
      setFont((index) =>
        index + value > 0 ? (index + value) % fonts.length : fonts.length - 1
      )
    }
  }

  return (
    <>
      {syllabary !== "romaji" ? (
        <button
          className="toggle-anim"
          type="button"
          onClick={toggleAnimations}
        >
          {!renderAnimations ? "Ver animaciones" : "Ver caracteres"}
        </button>
      ) : null}

      <div className="font-buttons" css={fontHandler}>
        <button type="button" onClick={() => handleClick(-1)}>
          <Left />
        </button>
        <div>{fonts[currentFont]}</div>
        <button type="button" onClick={() => handleClick(1)}>
          <Right />
        </button>
      </div>

      <KanaTable
        className={`table ${syllabary}`}
        columns={gridAreas[`${type}`].columns}
        columnSize={gridAreas[`${type}`].columnSize}
        areas={generateGridAreas(
          gridAreas[`${type}`].columns,
          gridAreas[`${type}`].rows
        )}
        font={fonts[currentFont]}
      >
        {headers[`${type}`].map((header) => (
          <TableHeader
            key={`${header.char}-${header.row}-${header.column}`}
            className={`tab-header header-${header.char}`}
            style={{
              gridArea: `x${header.column}-y${header.row}`,
            }}
          >
            {header.char}
          </TableHeader>
        ))}
        {kanas
          .filter((kana) => kana.type === type)
          .map((kana) => (
            <TableChars
              key={`${kana.romaji}-${kana.row}-${kana.column}`}
              char={kana}
              syllabary={syllabary}
              condition={canRenderAnimations}
            />
          ))}
      </KanaTable>
    </>
  )
}

Table.propTypes = {
  syllabary: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}
