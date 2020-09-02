/**@jsx jsx*/
import React from "react"
import { jsx } from "@emotion/core"
import {radical} from '../styling'

import CharAnimation from "./CharAnimation"

export default function Radical({ utf16, number, strokes, character, name }) {
  return (
    <div className="radical" css={radical}>
      <div className="left">
        <div className="radical char">{character}</div>
        <div className="radical anim">
          <CharAnimation name={utf16} />
        </div>
      </div>
      <div className="right">
        <div className="strokes">Trazos: {strokes}</div>
        <div className="number">Número: {number}</div>
        <div className="name">Nombre(s): {name}</div>
      </div>
    </div>
  )
}
