/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import { jsx } from "@emotion/core"
import { radical } from "../styling"

import CharAnimation from "./CharAnimation"

export default function Radical({ utf16, number, strokes, character, name }) {
  const [showAnimation, setShowAnimation] = useState(false)

  return (
    <div className="radical" css={radical}>
      {!showAnimation ? (
        <div className="radical char">{character}</div>
      ) : (
        <div className="radical animation">
          <CharAnimation name={utf16} />
        </div>
      )}
      <button
        type="button"
        className="strokes"
        onClick={() => setShowAnimation((value) => !value)}
      >
        Trazos: {strokes}
      </button>
      <div className="number">Número: {number}</div>
      <div className="name">Nombre: {name}</div>
    </div>
  )
}
