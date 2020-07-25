import React from "react"
import { Link, useParams, useRouteMatch } from "react-router-dom"

const linksExtended = [
  {
    label: "Básico",
    to: "basico",
  },
  {
    label: "Dakuten",
    to: "dakuten",
  },
  {
    label: "Combinación",
    to: "combinacion",
  },
  {
    label: "Extendido",
    to: "extendido",
  },
]
const links = [
  {
    label: "Básico",
    to: "basico",
  },
  {
    label: "Dakuten",
    to: "dakuten",
  },
  {
    label: "Combinación",
    to: "combinacion",
  },
]

export default function SyllabaryType() {
  const { path } = useRouteMatch()
  const { syllabary } = useParams()
  const customUrl = path.replace(":syllabary", syllabary).replace("/:type", "")
  if (syllabary === "hiragana") {
    return (
      <div id="syllabary-type">
        {links.map((link) => (
          <Link key={link.to} to={`${customUrl}/${link.to}`}>
            {link.label}
          </Link>
        ))}
      </div>
    )
  }
  return (
    <div id="syllabary-type">
      {linksExtended.map((link) => (
        <Link key={link.to} to={`${customUrl}/${link.to}`}>
          {link.label}
        </Link>
      ))}
    </div>
  )
}
