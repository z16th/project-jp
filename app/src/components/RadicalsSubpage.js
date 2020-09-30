/** @jsx jsx */
/* @jsxFrag React.Fragment */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react"
import { useLocation, useHistory } from "react-router-dom"
import { jsx } from "@emotion/core"
import queryString from "query-string"
import radicals from "../utils/json/radicals.json"
import { radicalsTable } from "../styling"

import Radical from "./Radical"
import PageButtons from "./PageButtons"

const cardsPerPage = 20
const numberOfPages = Array.from(
  Array(Math.ceil(radicals.length / cardsPerPage))
)

export default function RadicalsSubpage() {
  const history = useHistory()
  const { search } = useLocation()
  const { pagina } = queryString.parse(search, { parseNumbers: true })

  useEffect(() => {
    if (pagina === undefined || pagina < 0 || pagina > numberOfPages.length) {
      history.push("?pagina=1")
    }
  }, [pagina, history])

  return (
    <div id="radicals-page">
      <Content />
      <section css={radicalsTable}>
        <PageButtons currentPage={pagina} numberOfPages={numberOfPages} />
        <div className="table">
          {radicals.map((radical) =>
            radical.number > (pagina - 1) * cardsPerPage &&
            radical.number < (pagina - 1) * cardsPerPage + cardsPerPage + 1 ? (
              <Radical key={radical.utf16 + radical.character} {...radical} />
            ) : null
          )}
        </div>
        <PageButtons currentPage={pagina} numberOfPages={numberOfPages} />
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
