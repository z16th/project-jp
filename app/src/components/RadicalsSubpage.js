/**@jsx jsx */
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
