import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import queryString from "query-string"
import { capitalize } from "../utils/vanilla"
import { R, Highlight, Note, Callout } from "../styling"

import Table from "./Table"
import ToggleTables from "./ToggleTables"
import CiteSource from "./CiteSource"
import Bibliography from "./Bibliography"

const defaultSyllabaries = ["hiragana", "katakana", "romaji"]

const defaultSpanishTypes = ["basico", "diacritico", "combinacion", "extendido"]

const translateToEnglish = {
  basico: "basic",
  diacritico: "diacritic",
  combinacion: "combination",
  extendido: "extended",
}

const title = {
  basic: "Básico",
  diacritic: "Diacrítico",
  combination: "Combinación",
  extended: "Extendido",
}

export default function TablesSubpage() {
  const { search } = useLocation()
  const { silabario, tipo } = queryString.parse(search)
  const syllabarySelection =
    silabario !== undefined
      ? defaultSyllabaries.filter((e) => silabario.includes(e))
      : [...defaultSyllabaries]
  const typeSelection =
    tipo !== undefined
      ? defaultSpanishTypes.filter((e) => tipo.includes(e))
      : [...defaultSpanishTypes]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="content">
      <h1>Tablas</h1>
      <p>
        Las tablas de caracteres son una referencia útil en el aprendizaje de la
        lectura y escritura de los silabarios japoneses. Entre tipografías
        existen diferencias que pueden confundirnos fácilmente. Dependiendo de
        ella, los trazos que utiliza cada caracter pueden ser más fáciles o más
        difíciles de reconocer. Hay algunos caracteres que pueden ser escritos
        correctamente con distinto número de trazos.
      </p>
      <Callout>
        En el japonés la manera y el orden en que están escritos los trazos es
        muy importante
      </Callout>
      <p>
        En esta sección encontrarás tablas de los silabarios hiragana y
        katakana, así como las tablas de romanización.
      </p>
      <h2>Cómo usar</h2>
      <p>
        Las tablas están compuestas por filas de consonantes y columnas de
        vocales. Las sílabas correspondientes son formadas en las
        intersecciones: k + a → <R>ka</R>, etc.
      </p>
      <p>
        Caracteres con este formato{" "}
        <span className="exception">&nbsp;&nbsp;&nbsp;&nbsp;</span> son una
        excepción de pronunciación/escritura. Utiliza la tabla de rōmaji para
        verificar cuál es su forma correcta.
      </p>
      <p>
        Caracteres con este formato{" "}
        <span className="special">&nbsp;&nbsp;&nbsp;&nbsp;</span> están
        excluídos de las combinaciones con vocales.
      </p>
      <ul>
        <li>
          Utiliza la <b>Selección</b> para cambiar entre los silabarios y los
          tipos de caracteres que quieras visualizar. Por defecto, todas las
          tablas están habilitadas.
        </li>
        <li>
          Coloca el <b>cursor encima</b> de un caracter para cambiar a su
          visualización de tipografía con serifa.
          <Note>
            <b>Nota: </b>En dispositivos móviles deberás{" "}
            <b>pulsar sobre el caracter</b> para activar esta visualización.
          </Note>
        </li>
        <li>
          Pulsa en el botón <b>Ver animaciones</b> para cargar las animaciones
          de trazado.
        </li>
        <li>
          Para reproducir una animación o reiniciarla,{" "}
          <b>pulsa en el caracter</b> que desees visualizar.
        </li>
      </ul>
      <h2>Selección</h2>
      <Highlight>
        <ToggleTables syllabary={syllabarySelection} type={typeSelection} />
      </Highlight>
      {syllabarySelection.map((syllabary) => (
        <div
          key={syllabary}
          className={`syllabary ${syllabary} flex-center column`}
        >
          <h1 className="title">{capitalize(syllabary)}</h1>
          {typeSelection
            .map((type) => translateToEnglish[`${type}`])
            .map((type) => {
              return syllabary === "hiragana" && type === "extended" ? (
                <h2 key={type}>No contiene caracteres extendidos</h2>
              ) : (
                <div key={type} className={`type ${type} flex-center column`}>
                  <h2>{title[`${type}`]}</h2>
                  <Table syllabary={syllabary} type={type} />
                </div>
              )
            })}
        </div>
      ))}
      <Bibliography>
        <p>
          Las animaciones de trazado están basadas en datos proporcionados por{" "}
          <CiteSource source="kanjiVG" />
        </p>
      </Bibliography>
    </div>
  )
}
