import React, { useEffect } from "react"
import { useHistory, useLocation } from "react-router-dom"
import queryString from "query-string"
import { number } from "prop-types"
import wordData from "../utils/json/words.json"
import { PageStyled } from "../styling"

import WordOfTheDay from "./WordOfTheDay"
import Sidebar from "./Sidebar"
import PageButtons from "./PageButtons"

const cardsPerPage = 10
const numberOfPages = Array.from(
  Array(Math.ceil(wordData.length / cardsPerPage))
)

export default function History() {
  const history = useHistory()
  const { search } = useLocation()
  const { pagina } = queryString.parse(search, { parseNumbers: true })

  useEffect(() => {
    if (pagina === undefined || pagina < 0 || pagina > numberOfPages.length) {
      history.push("?pagina=1")
    }
  }, [pagina, history])

  return (
    <PageStyled>
      <Sidebar />
      <div className="main-content">
        <div className="content">
          <PageButtons currentPage={pagina} numberOfPages={numberOfPages} />
          {wordData.map((word, i) =>
            i + 1 > (pagina - 1) * cardsPerPage &&
            i + 1 < (pagina - 1) * cardsPerPage + cardsPerPage + 1 ? (
              <div key={i}>
                <h1>{i + 1}</h1>
                <WordOfTheDay key={i} index={i} />
              </div>
            ) : null
          )}
        </div>
      </div>
    </PageStyled>
  )
}
