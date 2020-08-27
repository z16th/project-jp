/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from "react"
import kanjiData from "../utils/json/kanji-1-80.json"
import { jsx } from "@emotion/core"
import { H, K, R, Kj, Note, Callout, Example, kanjiTable } from "../styling"

import KanjiCard from "./KanjiCard"

export function KanjiSubpage() {
  const example = kanjiData[19]
  return (
    <>
      <h1>Cartas</h1>
      <p>
        En esta sección encontrarás cartas de kanji que contienen información
        sobre cada caracter. Existen diferentes clasificaciones según el orden
        en el que son citados en las diferentes referencias, en esta página
        encontrarás el orden correspondiente al su enseñanza en las escuelas de
        Japón.
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
          reiniciarla sólo tienes que pulsar en ella.
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
        pronuncación kunyomi.
      </Callout>
      <Note>
        <b>Nota: </b> Esta página hace uso de ese formato. Es posible que otras
        fuentes manejen un formato distinto.
      </Note>
      <p>
        Las pronunciaciones pueden contener signos como &quot;.&quot;,
        &quot;/&quot; y &quot;～&quot; para indicar algunos detalles de este
        diccionario de kanji.
      </p>
      <ul>
        <li>
          El punto (.) indica que la pronunciación del kanji termina en ese
          lugar y las sílabas siguentes corresponden a la formación de una
          palabra completa.
          <Example>
            <H>み.る</H> <R>mi.ru</R>: donde <H>み</H> <R>mi</R> es la
            pronunciación del kanji y <H>る</H> <R>ru</R> es el furigana →{" "}
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
          El símbolo "～" indica que se pueden generar palabras añadiendo
          furigana, sin mencionar explícitamente qué palabras pueden ser
          formadas.
        </li>
      </ul>

      <Note>
        <b>Nota: </b>Estos signos pueden ser encontrados en algunos diccionarios
        para dividir entre los kanjis y el vocabulario en el que son usados, al
        igual que en esta página. Es posible que otras fuentes utilicen un
        formato distinto.
      </Note>
      <h1 className="text-center">1 - 80</h1>
      <section className="table" css={kanjiTable}>
        {kanjiData.map((data) => (
          <KanjiCard key={data.utf16} data={data} />
        ))}
      </section>
    </>
  )
}