/** @jsx jsx */
/* @jsxFrag React.Fragment */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { jsx } from "@emotion/core"
import radicals from "../utils/json/radicals.json"
import { cardsTable } from "../styling"

import Radical from "./Radical"
import PageButtons from "./PageButtons"
import usePagesQuery from "../hooks/useCurrentLocation"

const cardsPerPage = 20
const numberOfPages = Math.ceil(radicals.length / cardsPerPage)

export default function RadicalsSubpage() {
  const page = usePagesQuery(numberOfPages)

  return (
    <div id="radicals-page">
      <Content />

      <h1>Radicales</h1>
      <section css={cardsTable}>
        <PageButtons currentPage={page} numberOfPages={numberOfPages} />
        <div className="table">
          {radicals.map((radical) =>
            radical.number > (page - 1) * cardsPerPage &&
            radical.number < (page - 1) * cardsPerPage + cardsPerPage + 1 ? (
              <div key={radical.utf16 + radical.character}>
                <h2>{`No.${radical.number}: ${radical.character}`}</h2>
                <Radical {...radical} />
              </div>
            ) : null
          )}
        </div>
        <PageButtons currentPage={page} numberOfPages={numberOfPages} />
      </section>
    </div>
  )
}

// eslint-disable-next-line no-unused-vars
const Content = () => {
  const example = radicals[143]
  return (
    <>
      <h1>Cartas de Radicales</h1>
      <p>
        En esta sección encontrarás cartas de radicales que contienen
        información sobre series de trazos que se utilizan para formar los
        kanji.
      </p>
      <h2>Cómo usar</h2>
      <div
        className="example"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Radical {...example} />
      </div>
      <p>En la parte superior se encuentra:</p>
      <ul>
        <li>
          <b>Radical</b> en tipografía o animación
        </li>
      </ul>
      <p>En la parte inferior se encuentra:</p>
      <ul>
        <li>
          Número de <b>Trazos</b> necesarios para escribirlo
        </li>
        <li>
          <b>Número</b> según el orden encontrado en el libro The Complete Guide
          to Japanese Kanji
        </li>
        <li>
          <b>Nombre</b> arbitrario en español
        </li>
      </ul>
    </>
  )
}
