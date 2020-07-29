import React from "react"
import { useParams, useRouteMatch } from "react-router-dom"
import NavBar from "./NavBar"
import { yellow, blue } from "../utils"

const linksExtended = [
  {
    to: "basico",
    children: "Básico",
  },
  {
    to: "dakuten",
    children: "Dakuten",
  },
  {
    children: "Combinación",
    to: "combinacion",
  },
  {
    to: "extendido",
    children: "Extendido",
  },
]
const links = [
  {
    to: "basico",
    children: "Básico",
  },
  {
    to: "dakuten",
    children: "Dakuten",
  },
  {
    to: "combinacion",
    children: "Combinación",
  },
]

export default function SyllabaryType() {
  const { path } = useRouteMatch()
  const { syllabary } = useParams()
  if (syllabary === "hiragana") {
    return <NavBar id="syllabary-type" links={links} color={yellow} />
  }
  return <NavBar id="syllabary-type" links={linksExtended} color={blue} />
}
