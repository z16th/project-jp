import React, { useEffect } from "react"
import Sidebar from "./Sidebar"
import WordOfTheDay from "./WordOfTheDay"
import { PageStyled, H, K, Kj, R, Callout, Example, Note } from "../styling"
import CiteSource from "./Bibliography"

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageStyled id="home-page">
      <Sidebar from=".content" />
      <div className="main-content">
        <Content />
      </div>
    </PageStyled>
  )
}

const Content = () => {
  return (
    <div className="content">
      <h1>Palabra del día</h1>
      <WordOfTheDay />
      <h2>Características</h2>
      <p>
        La palabra del día está compuesta de los siguientes elementos, de arriba
        hacia abajo:
      </p>
      <ul>
        <li>
          Furigana: Si la palabra contiene kanji, la pronunciación de cada uno
          de ellos aparecerá escrita en hiragana.
        </li>
        <li>
          Palabra: Es el concepto, el cual es seleccionado de manera aleatoria
          diariamente.
        </li>
        <li>
          Rōmaji: Es la pronunciación de la palabra escrita con el abecedario
          romano.
        </li>
        <li>Tipo de palabra: Es la naturaleza gramatical de la palabra.</li>
        <li>Significado(s): Acepciones correspondientes a la palabra.</li>
      </ul>
      <Note>
        <b>Nota: </b>Información obtenida y traducida del diccionario{" "}
        <CiteSource source="randomHouseDictionary" />
      </Note>

      <h1>Convenciones utilizadas en este proyecto</h1>
      <h2>Colores</h2>
      <p>
        Texto en <b>hiragana</b> está remarcado en amarillo: <H>こんにちは</H>
      </p>
      <p>
        Texto en <b>katakana</b> está remarcado en azul: <K>ロールズ</K>
      </p>
      <p>
        Texto en <b>kanji</b> está remarcado en rosa: <Kj>十六番目</Kj>
      </p>
      <p>
        Texto en <b>rōmaji</b> está remarcado en morado: <R>desu</R>
      </p>
      <Note>
        <b>Nota: </b>La sección Furigana y Romaji de la Palabra del día son las
        únicas excepciones. Debe darse por hecho que el primero está escrito en
        hiragana y el segundo en romaji a pesar de no ser remarcados con
        colores.
      </Note>

      <h2>Tipos de texto</h2>
      <Callout>
        Texto encerrado de esta forma es un dato que puede ser útil recordar.
      </Callout>
      <Example>Texto encerrado de esta manera es un ejemplo</Example>
      <p className="link-to" style={{ margin: "0" }}>
        Texto con esta apariencia es un link a una ubicación dentro de este
        sitio
      </p>
      <p className="bibliography">
        <span>Texto con esta apariencia es un link a una página externa</span>
      </p>

      <h2>Romanización</h2>
      <p>
        Se utiliza la <CiteSource source="romanization" />
      </p>
    </div>
  )
}
