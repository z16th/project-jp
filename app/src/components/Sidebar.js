/** @jsx jsx */
import { jsx } from "@emotion/core"
import { sidebar } from "../utils"
import { useEffect } from "react"

export default function Sidebar({ content, extra }) {
  useEffect(() => {
    content.forEach((header, i) => {
      header.id = `jump-to-${i}`
    })
  }, [content])

  if (content === null) return null
  return (
    <div id="sidebar" css={sidebar}>
      <div className="nav-buttons">
        <h4>En esta página</h4>
        {content.map((header, i) => (
          <button
            key={i}
            type="button"
            className={`scroll-link link-${header.tagName}`}
            onClick={() => scrollTo(i)}
          >
            {header.innerHTML}
          </button>
        ))}
        {extra}
      </div>
    </div>
  )
}

const scrollTo = (elementId) => {
  const element = document.getElementById(`jump-to-${elementId}`)
  if (element !== null) {
    window.scrollTo({
      top: element.offsetTop - 60,
    })
  }
}
