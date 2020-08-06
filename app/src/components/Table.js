/** @jsxFrag React.Fragment */
import React, { useState, Fragment } from "react"
import styled from "@emotion/styled"
import { useParams } from "react-router-dom"
import CharAnimation from "./CharAnimation"
import {
  TableElement1,
  TableElement2,
  TableHeader,
  kanjiSerifFont,
  gray,
  yellow,
  blue,
  pink,
  H2,
} from "../utils"
import kanas from "../utils/json/kana-all.json"
import grids from "../utils/json/grids-all.json"
import { useRef } from "react"

const StyledTable = styled.section`
  display: flex;
  justify-content: center;
  grid-gap: 8px;
  margin: 20px 0px 40px 0px;
  .tab-head {
    color: ${gray.light};
  }
  .kana {
    padding: 8px;
    border-radius: 8px;
    background-color: ${(props) => props.color.light};
    &:hover {
      background-color: ${(props) => props.color.regular};
      font-family: ${kanjiSerifFont};
    }
  }
  .exception {
    background-color: ${gray.dark};
  }
  .special {
    border: 2px solid black;
    margin-top: 20px;
  }
  .on-hover {
    &:hover {
      font-family: ${kanjiSerifFont};
    }
  }
`

export default function Table({ type }) {
  const { syllabary } = useParams()
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
        className={`kana flex-center char-${charObj.romaji} ${charObj.class}`}
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
    <div className='flex-center column'>
      <H2>{type.toUpperCase()}</H2>
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
    </div>
  )
}

const CharAsFont = ({ charObj, syllabary }) => {
  if (syllabary === "romaji" || charObj.type === "extendido") {
    return (
      <TableElement2 className="char flex-center">
        {charObj[`${syllabary}`]}
      </TableElement2>
    )
  }
  return (
    <TableElement1 className="char flex-center on-hover">
      {charObj[`${syllabary}`]}
    </TableElement1>
  )
}

const CharAsAnim = ({ charObj, syllabary }) => {
  if (syllabary !== "romaji")
    return charObj.utf16[`${syllabary}`].map((utf16) => (
      <CharAnimation key={utf16} name={utf16} />
    ))
  return null
}
