/**@jsx jsx */
/* @jsxFrag React.Fragment */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react"
import { Link, useLocation, useRouteMatch, useHistory } from "react-router-dom"
import { jsx } from "@emotion/core"
import queryString from "query-string"
import radicals from "../utils/json/radicals.json"
import { pageButton, radicalsTable } from "../styling"

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
    <div id="radicals-page">
      <Content />
      <section css={radicalsTable}>
        <PageButtons currentPage={pagina} />
        <div className="table">
          {radicals.map((radical) =>
            radical.number > (pagina - 1) * cardsPerPage &&
            radical.number < (pagina - 1) * cardsPerPage + cardsPerPage + 1 ? (
              <Radical key={radical.utf16 + radical.character} {...radical} />
            ) : null
          )}
        </div>
        <PageButtons currentPage={pagina} />
      </section>
    </div>
  )
}

const Content = () => {
  return (
    <>
      <h1>Introducción</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi possimus
        natus consequatur vitae aspernatur qui deleniti, architecto unde
        consectetur, hic nostrum! Porro, odit. Maiores quasi quod natus id
        delectus aliquid quis, error minima, optio, velit tempora. Aperiam
        nostrum explicabo molestiae!
      </p>
    </>
  )
}

const PageButtons = ({ currentPage }) => {
  const { url } = useRouteMatch()
  return (
    <div className="page-buttons">
      {numberOfPages.map((e, i) => (
        <Link
          key={i}
          to={`${url}?pagina=${i + 1}`}
          type="button"
          css={pageButton}
          className={currentPage - 1 === i ? "active" : ""}
        >
          {i + 1}
        </Link>
      ))}
    </div>
  )
}
