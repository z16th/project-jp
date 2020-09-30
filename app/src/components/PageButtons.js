/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { jsx } from "@emotion/core"
import { Link, useRouteMatch } from "react-router-dom"
import { pageButton } from "../styling"

export default function PageButtons({ currentPage, numberOfPages }) {
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
