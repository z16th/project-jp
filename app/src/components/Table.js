/** @jsxFrag React.Fragment */
import React, { useState, Fragment } from "react"
import styled from "@emotion/styled"
import { useParams } from "react-router-dom"
import CharAnimation from "./CharAnimation"
import {
  TableElement,
  TableHeader,
  kanjiSerifFont,
  gray,
  yellow,
  blue,
  pink
} from "../utils"
import kanas from "../utils/json/kana-all.json"
import grids from "../utils/json/grids-all.json"
import { useRef } from "react"

const StyledTable = styled.section`
  display: flex;
  justify-content: center;
  grid-gap: 12px;
  .tab-head {
    color: ${gray.light};
  }
  .kana {
    padding: 8px;
    border-radius: 8px;
    background-color: ${(props) => props.color.regular};
  }
  .char {
    &:hover {
      font-family: ${kanjiSerifFont};
    }
  }
`

export default function Table() {
  const { syllabary, type } = useParams()
  const [renderAnimations, setRenderAnimations] = useState(false)
  const color = useRef(gray.regular)

  if (syllabary === "hiragana") color.current = yellow
  if (syllabary === "katakana") color.current = blue
  if (syllabary === "romaji") color.current = pink

  const handleAnimButton = () => {
    setRenderAnimations((state) => !state)
  }

  const renderTableChars = (charObj) => {
    return (
      <div
        key={charObj.romaji}
        className={`kana flex-center ${charObj.romaji} ${charObj.class}`}
        style={{ gridArea: charObj.romaji }}
      >
        {renderAnimations && syllabary !== "romaji" ? (
          <CharAsAnim charObj={charObj} syllabary={syllabary} />
        ) : (
          <CharAsFont charObj={charObj} syllabary={syllabary} />
        )}
      </div>
    )
  }

  const renderTableHeaders = (headersArray) => {
    return (
      <>
        {headersArray.map(({ char, coord }) => (
          <TableHeader
            key={coord}
            className={`${char} tab-head flex-center noselect`}
            style={{ gridArea: coord }}
          >
            {char}
          </TableHeader>
        ))}
      </>
    )
  }

  const renderAnimButton = () => {
    if (syllabary !== "romaji") {
      return (
        <button className="anim-btn" onClick={handleAnimButton}>
          {!renderAnimations ? "Ver animaciones" : "Ver caracteres"}
        </button>
      )
    }
    return null
  }

  return (
    <Fragment>
      {renderAnimButton()}
      <StyledTable
        className={`table`}
        style={grids[`${type}`].gridStyle}
        color={color.current}
      >
        {renderTableHeaders(grids[`${type}`].headers)}
        {kanas
          .filter((kana) => kana.type === type)
          .map((kana) => renderTableChars(kana))}
      </StyledTable>
    </Fragment>
  )
}

const CharAsFont = ({ charObj, syllabary }) => {
  return (
    <TableElement className="char flex-center">
      {charObj[`${syllabary}`]}
    </TableElement>
  )
}

const CharAsAnim = ({ charObj, syllabary }) => {
  if (syllabary !== "romaji")
    return charObj.utf16[`${syllabary}`].map((utf16) => (
      <CharAnimation key={utf16} name={utf16} />
    ))
  return null
}
