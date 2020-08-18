import React, { useState } from "react"
import PropTypes from "prop-types"
import TableChars from "./TableChars"
import { generateGridAreas } from "../utils/vanilla"
import kanas from "../utils/json/kana-all.json"
import headers from "../utils/json/headers-all.json"
import { KanaTable, TableHeader } from "../styling"

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

export default function Table({ syllabary, type }) {
  const [renderAnimations, setRenderAnimations] = useState(false)
  const canRenderAnimations = renderAnimations && syllabary !== "romaji"

  const toggleAnimations = () => {
    setRenderAnimations((state) => !state)
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
      <KanaTable
        className={`table ${syllabary}`}
        columns={gridAreas[`${type}`].columns}
        columnSize={gridAreas[`${type}`].columnSize}
        areas={generateGridAreas(
          gridAreas[`${type}`].columns,
          gridAreas[`${type}`].rows
        )}
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
