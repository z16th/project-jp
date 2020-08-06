import React, { useState } from "react"
import kanjiData from "../utils/json/kanji-1-80.json"
import KanjiCard from "./KanjiCard"
import { H1, H2, H3, P1, PageStyled } from "../utils"
import styled from "@emotion/styled"

export default function KanjiPage() {
  return (
    <PageStyled>
      <div className="main-content">
        <Content />
        <HowToUse />
        <KanjiTable />
        <Bibliography />
      </div>
    </PageStyled>
  )
}

function Content() {
  return (
    <div className="content">
      <H1>Kanji</H1>
      <hr></hr>
      <P1>
        El sistema de escritura japonés hace uso extenso de los caracteres
        llamados <strong>kanji</strong>. Son caracteres que fueron creados en
        China hace más de 3,000 años. Cada kanji posee su propia forma, sonido y
        significado. Fueron introducidos en Japón junto con el budismo en el
        siglo III. Antes de eso Japón no tenía un sistema de escritura.
      </P1>
      <P1>
        El hiragana y el katakana están basados en el kanji. Fueron
        desarrollados entre el siglo VIII y el siglo X con el propósito de hacer
        más rápida y fácil la escritura de palabras en japonés. Mientras que el
        hiragana es resultado de la simplificación de trazos usados en los
        kanji, el katakana surgió de tomar algunas secciones de los mismos.
      </P1>
      <P1>
        A diferencia del chino, los kanji japoneses usualmente tienen más de una
        pronunciación, la cual depende del contexto en el que se encuentre en
        una oración. Existen 2,136 kanjis de &quot;uso regular&quot;, los cuales
        son combinados para crear las decenas de miles de palabras del idioma
        japonés.
      </P1>
      <H2>
        <strong>Los radicales</strong>
      </H2>
      <P1>
        Los kanji están compuestos de una serie de trazos predefinidos llamados{" "}
        <strong>radicales</strong>. En japonés cada uno de estos trazos tienen
        un nombre específico, aunque para su enseñanza en otro idioma suelen
        tener nombres arbitrarios para facilitar su memorización. Ya que casi
        todos los kanji son en realidad una combinación de dos o más radicales,
        puede ser de gran utilidad aprenderlos.
      </P1>
      <H2>
        <strong>Las pronunciaciones</strong>
      </H2>
      <P1>
        Hay dos formas básicas en las que los kanjis pueden ser leídos: la
        pronunciación <strong>on-yomi</strong> o china, y la pronunciación{" "}
        <strong>kun-yomi</strong> o japonesa.
      </P1>
      <P1>石 → on-yomi: セキ、シャク (SEKI, SHAKU) kun-yomi: いし (ishi)</P1>
      <P1>
        Por convención se utiliza katakana o rōmaji en mayúsculas para indicar
        la pronunciación china y hiragana o rōmaji en minúsculas para indicar la
        pronunciación japonesa aunque otras fuentes pueden llegar a utilizar un
        formato distinto.
      </P1>
      <H2>
        <strong>Tipos de Kanji</strong>
      </H2>
      <P1>Los kanji japoneses pueden ser divididos en 4 tipos básicos:</P1>
      <ul>
        <li>Pictogramas (imágenes de objetos):　山, 田, 川</li>
        <li>Ideogramas simples (imágenes de ideas):　三, 上, 中</li>
        <li>
          Ideogramas compuestos (varios pictogramas que forman uno solo):　森,
          町, 物
        </li>
        <li>
          Ideogramas de sonido (una combinación de caracteres: unos usados por
          su sonido y otros usados por su significado):　英, 語, 曜
        </li>
      </ul>
      <P1>
        Alrededor del 80% de los kanjis son ideogramas de sonido compuestos.
      </P1>
      <H2>
        <strong>Escritura</strong>
      </H2>
      <H3>
        <strong>Reglas generales</strong>
      </H3>
      <ul>
        <li>Los trazos son escritos de izquierda a derecha.</li>
        <li>Los trazos son escritos de arriba hacia abajo.</li>
        <li>
          Cuando una línea horizontal y una vertical se cruzan, la horizontal se
          dibuja primero.
        </li>
        <li>
          Cuando hay un arreglo de tres trazos izquierda-en medio-derecha y el
          trazo de en medio es el más largo, se dibuja primero.
        </li>
        <li>
          Cuando hay líneas que rodean un caracter, las líneas de fuera son
          dibujadas primero.
        </li>
        <li>
          Cuando el centro de un kanji es rodeado por una caja, el centro es
          dibujado primero antes de la línea inferior de la caja.
        </li>
        <li>
          Líneas que cubren el exterior, sin cubrir la parte superior, son
          escritas al final.
        </li>
      </ul>
      <P1>
        Dependiendo de la referencia que se consulte se pueden encontrar más
        reglas o menos reglas.
      </P1>
      <H3>
        <strong>Tipos de trazos</strong>
      </H3>
      <ul>
        <li>Línea doblada</li>
        <li>Línea horizontal</li>
        <li>Línea vertical + paro</li>
        <li>Línea vertical + giro hacia arriba</li>
        <li>Línea doblada + trazo barrido</li>
        <li>Barrido a la izquierda</li>
        <li>Barrido a la derecha</li>
        <li>Punto</li>
        <li>Curva + giro hacia arriba</li>
        <li>Línea vertical</li>
      </ul>
      <P1>
        Dependiendo de la tipografía, es probable que los trazos luzcan de una
        manera distinta a como lucen escritos a mano.
      </P1>
    </div>
  )
}

function HowToUse() {
  const example = kanjiData[19]
  return (
    <div className="content">
      <H2>Cómo usar esta página</H2>
      <P1>
        En esta sección encontrarás diferentes grupos de cartas divididas por
        grados, correspondientes al orden en que se enseñan en las escuelas de
        Japón. Cada tarjeta contiene información sobre un kanji específico.
      </P1>
      <KanjiCard data={example} />
      <P1>
        Del lado izquierdo se encuentra el <b>caracter</b>, el número de{" "}
        <b>trazos</b> que se necesitan para escribirlo y el <b>número</b> según
        el orden encontrado en el libro The Complete Guide To Japanese Kanji.{" "}
        <u>
          Al dar click en <b>Trazos</b> cambiará la visualización del caracter
        </u>
        . Aparecerán nuevos botones, con los que podrás reproducir, pausar y
        reiniciar la animación del orden de los trazos.
      </P1>
      <P1>
        Del lado derecho se encuentran las pronunciaciones <b>on-yomi</b>{" "}
        (China) y <b>kun-yomi</b> (Japonesa) así como los posibles{" "}
        <b>significados</b>.{" "}
        <u>
          Al dar click en las <b>pronunciaciones</b> cambiará su visualización
        </u>
        , de kana a rōmaji y vice versa.
      </P1>
      <P1>
        <b>Nota: </b>En el estudio de los kanji usualmente se hace uso del
        katakana o del rōmaji en mayúsculas para indicar la pronunciación
        on-yomi. Mientras que el hiragana o el rōmaji en minúsculas se usa para
        indicar la pronuncación kun-yomi. Esta página hace uso de ese formato.
        Es posible que otras fuentes manejen un formato distinto.
      </P1>
      <P1>
        Las pronunciaciones pueden contener signos como &quot;.&quot;,
        &quot;/&quot; y &quot;～&quot; para indicar algunos detalles de este
        diccionario de kanji. El punto (.) indica que la pronunciación del kanji
        termina en ese lugar y las sílabas siguentes corresponden a la formación
        de una palabra completa. En el ejemplo, み.る (mi.ru) indica que み (mi)
        es la pronunciación del kanji, y que みる (miru) es una palabra
        completa.
        <br /> Sustituyendo queda 見る (miru). La diagonal (/) indica que se
        puede utilizar la misma pronunciación del kanji para generar otras
        palabras. En el ejemplo: {example.kunyomiKana} ({example.kunyomiRomaji})
        se divide en tres palabras: la ya mencionada, み.せる (mi.seru) y
        み.える (mi.eru). Las últimas dos pasan a ser 見せる (miseru) y 見える
        (mieru) respectivamente.
      </P1>
      <P1>
        <b>Nota: </b>Estos signos pueden ser encontrados en algunos diccionarios
        para dividir entre los kanjis y el vocabulario en el que son usados, al
        igual que en esta página. Es posible que otras fuentes utilicen un
        formato distinto.
      </P1>
    </div>
  )
}

const KanjiTableStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  .table {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
`

function KanjiTable() {
  return (
    <KanjiTableStyled>
      <H2>Kanji de Primer Grado</H2>
      <H3>1 - 80</H3>
      <section className="table">
        {kanjiData.map((data) => (
          <KanjiCard
            key={data.utf16}
            data={data}
          />
        ))}
      </section>
    </KanjiTableStyled>
  )
}

function Bibliography() {
  return (
    <div id="bibliography" className="content">
      <P1>
        Las animaciones de trazado están basadas en datos proporcionados por{" "}
        <a href="http://kanjivg.tagaini.net/">KanjiVG</a>.
      </P1>
      <P1>
        Parte de la información de este sitio se puede consultar en los libros
        de referencia:
      </P1>
      <ul>
        <li>
          Seely, C., Henshall, K. G., & Fan, J. (2016).{" "}
          <a href="https://www.amazon.com/-/es/Complete-Guide-Japanese-Kanji-Understanding-ebook/dp/B01DIF7RBI/">
            <em>
              The Complete Guide to Japanese Kanji: (JLPT All Levels)
              Remembering and Understanding the 2,136 Standard Characters
            </em>
          </a>{" "}
          (First ed.) [E-book]. Tuttle Publishing.
        </li>

        <li>
          Stout, T. G., &amp; Hakone, K. (2017).{" "}
          <a href="https://www.amazon.com/-/es/Japanese-Kanji-Beginners-Levels-Characters/dp/4805310499">
            <em>
              Japanese Kanji for Beginners: First Steps to Learn the Basic
              Japanese Characters
            </em>
          </a>
          . Tuttle Publishing.
        </li>
      </ul>
    </div>
  )
}
