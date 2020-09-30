/** @jsx jsx */
/** @jsxFrag React.Fragment */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react"
import { useHistory, useLocation } from "react-router-dom"
import queryString from "query-string"
import { jsx } from "@emotion/core"
import kanjiData from "../utils/json/kanji-1-80.json"
import { H, R, Kj, Note, Callout, Example, kanjiTable } from "../styling"

import KanjiCard from "./KanjiCard"
import useScrollOnLoad from "../hooks/useScrollOnLoad"
import PageButtons from "./PageButtons"

const cardsPerPage = 10
const numberOfPages = Array.from(
  Array(Math.ceil(kanjiData.length / cardsPerPage))
)

export default function KanjiSubpage() {
  const history = useHistory()
  const { search } = useLocation()
  const { pagina } = queryString.parse(search, { parseNumbers: true })
  const example = kanjiData[19]

  useScrollOnLoad()

  useEffect(() => {
    if (pagina === undefined || pagina < 0 || pagina > numberOfPages.length) {
      history.push("?pagina=1")
      console.log(pagina)
    }
  }, [pagina, history])

  return (
    <>
      <h1>Cartas</h1>
      <p>
        En esta sección encontrarás cartas de kanji que contienen información
        sobre algunos caracteres. Existen diferentes clasificaciones según el
        orden en el que son citados en las diferentes referencias, en esta
        página encontrarás el orden correspondiente a su enseñanza en las
        escuelas de Japón, también conocido como <Kj>常用漢字</Kj>{" "}
        <R>jōyō kanji</R> [kanji de uso común].
      </p>
      <p>
        Otras formas de clasificación que se pueden encontrar son por número de
        trazos, según su aparición en el examen de dominio de idioma (JLPT) o
        simplemente un orden arbitrario, usualmente ocupado en diccionarios.
      </p>
      <h2>Cómo usar</h2>
      <div className="flex-center">
        <KanjiCard data={example} />
      </div>
      <p>Del lado izquierdo se encuentra:</p>
      <ul>
        <li>
          <b>Kanji</b> en tipografía o animación
        </li>
        <li>
          Número de <b>Trazos</b> que necesarios para escribirlo
        </li>{" "}
        <li>
          Al <b>pulsar en Trazos cargará la animación de trazado</b>. Por
          defecto las cartas reproducen su propia animación al cargar. Para
          reiniciarla solo tienes que pulsar en ella.
        </li>
        <li>
          <b>Número</b> según el orden encontrado en el libro The Complete Guide
          To Japanese Kanji.
        </li>
      </ul>
      <p>Del lado derecho se encuentra:</p>
      <ul>
        <li>
          Pronunciaciones <b>Onyomi</b> (China) y <b>Kunyomi</b> (Japonesa)
        </li>
        <li>
          <b>Pulsar en las pronunciaciones cambiará su visualización</b> de kana
          a rōmaji y vice versa.
        </li>
        <li>
          <b>Significado(s)</b>
        </li>
      </ul>
      <Callout>
        En el estudio de los kanji usualmente se hace uso del katakana o del
        rōmaji en mayúsculas para indicar la pronunciación onyomi. Mientras que
        el hiragana o el rōmaji en minúsculas se usa para indicar la
        pronunciación kunyomi.
      </Callout>
      <p>
        Las pronunciaciones pueden contener signos como &quot;.&quot;,
        &quot;/&quot; y &quot;～&quot; para indicar algunos detalles de este
        diccionario de kanji.
      </p>
      <ul>
        <li>
          El punto (.) indica que la pronunciación del kanji termina en ese
          lugar y las sílabas siguientes corresponden a la formación de una
          palabra completa.
          <Example>
            <H>み.る</H> <R>mi.ru</R>: donde <H>み</H> <R>mi</R> es la
            pronunciación del kanji y <H>る</H> <R>ru</R> es el okurigana →{" "}
            <Kj>見</Kj>
            <H>る</H>
          </Example>
        </li>
        <li>
          La diagonal (/) indica que se puede utilizar la misma pronunciación
          del kanji para generar otras palabras.
          <Example>
            <H>{example.kunyomiKana}</H> <R>{example.kunyomiRomaji}</R>, se
            divide en tres palabras: la ya mencionada, <H>み.せる</H>{" "}
            <R>mi.seru</R> y <H>み.える</H> <R>mi.eru</R> → donde las últimas
            dos son <Kj>見</Kj>
            <H>せる</H> <R>miseru</R> y <Kj>見</Kj>
            <H>える</H> <R>mieru</R> respectivamente.
          </Example>
        </li>
        <li>
          El símbolo &quot;～&quot; indica que se pueden generar palabras
          añadiendo otros caracteres, sin mencionar explícitamente qué palabras
          pueden ser formadas.
        </li>
      </ul>

      <Note>
        <b>Nota: </b> Esta página hace uso de algunas convenciones ocupadas en
        distintas fuentes aunque es posible que otras referencias manejen un
        formato distinto.
      </Note>

      <h1 className="text-center">1 - 80</h1>
      <section className="table" css={kanjiTable}>
        <PageButtons currentPage={pagina} numberOfPages={numberOfPages} />
        <div className="table">
          {kanjiData.map((data) =>
            data.number > (pagina - 1) * cardsPerPage &&
            data.number < (pagina - 1) * cardsPerPage + cardsPerPage + 1 ? (
              <div key={data.number}>
                <h2>{data.number}</h2>
                <KanjiCard key={data.utf16} data={data} />
              </div>
            ) : null
          )}
        </div>
        <PageButtons currentPage={pagina} numberOfPages={numberOfPages} />
      </section>
    </>
  )
}
