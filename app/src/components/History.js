/**@jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { jsx } from "@emotion/core"
import wordData from "../utils/json/words.json"
import { PageStyled, cardsTable } from "../styling"

import WordOfTheDay from "./WordOfTheDay"
import Sidebar from "./Sidebar"
import PageButtons from "./PageButtons"
import usePagesQuery from "../hooks/useCurrentLocation"

const cardsPerPage = 10
const numberOfPages = Math.ceil(wordData.length / cardsPerPage)

export default function History() {
  const page = usePagesQuery(numberOfPages)

  return (
    <PageStyled>
      <Sidebar />
      <div className="main-content">
        <div className="content">
          <h1>Historial de palabras</h1>
          <section css={cardsTable}>
            <PageButtons currentPage={page} numberOfPages={numberOfPages} />
            <div>
              {wordData.map((word, i) =>
                i + 1 > (page - 1) * cardsPerPage &&
                i + 1 < (page - 1) * cardsPerPage + cardsPerPage + 1 ? (
                  <div key={`${word.date}-${i}`}>
                    <h2>{`${word.date}: ${word.word}`}</h2>
                    <WordOfTheDay index={i} />
                  </div>
                ) : null
              )}
            </div>
            <PageButtons currentPage={page} numberOfPages={numberOfPages} />
          </section>
        </div>
      </div>
    </PageStyled>
  )
}
