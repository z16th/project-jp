import React, { useEffect } from "react"
import { Link, useLocation, useRouteMatch, useHistory } from "react-router-dom"
import queryString from "query-string"
import radicals from "../utils/json/radicals.json"
import { PageStyled } from "../styling"

import Radical from "./Radical"

const cardsPerPage = 20
const numberOfPages = Array.from(
  Array(Math.ceil(radicals.length / cardsPerPage))
)

export default function RadicalsPage() {
  const history = useHistory()
  const { search } = useLocation()
  const { pagina } = queryString.parse(search, { parseNumbers: true })

  useEffect(() => {
    if (pagina === undefined || pagina < 0 || pagina > numberOfPages.length) {
      history.push("?pagina=1")
    }
  }, [pagina, history])

  return (
    <PageStyled id="radicals-page">
      <div className="main-content">
        <div className="content">
          {numberOfPages.map((e, i) => (
            <PageButton key={i} index={i} />
          ))}
          <section style={{ display: "flex", flexWrap: "wrap" }}>
            {radicals.map((radical) =>
              radical.number > (pagina - 1) * cardsPerPage &&
              radical.number <
                (pagina - 1) * cardsPerPage + cardsPerPage + 1 ? (
                <Radical key={radical.utf16 + radical.character} {...radical} />
              ) : null
            )}
          </section>
        </div>
      </div>
    </PageStyled>
  )
}

const PageButton = ({ index }) => {
  const { url } = useRouteMatch()
  return (
    <Link
      to={`${url}?pagina=${index + 1}`}
      type="button"
      className="page-index"
    >
      {index + 1}
    </Link>
  )
}
