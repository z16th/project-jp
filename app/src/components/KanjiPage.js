/** @jsx jsx */
import { Fragment, useEffect } from "react"
import { jsx } from "@emotion/core"
import Sidebar from "./Sidebar"
import KanjiCard from "./KanjiCard"
import CiteSource from "./Bibliography"
import kanjiData from "../utils/json/kanji-1-80.json"
import {
  PageStyled,
  H,
  K,
  Kj,
  R,
  Callout,
  Example,
  Note,
  kanjiTable,
} from "../styling"
import CharAnimation from "./CharAnimation"

export default function KanjiPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageStyled id="kanji-page">
      <Sidebar />
      <div className="main-content">
        <div className="content">
          <Content />
          <KanjiTable />
          <Bibliography />
        </div>
      </div>
    </PageStyled>
  )
}

function KanjiTable() {
  return (
    <Fragment>
      <h2 className="text-center">1 - 80</h2>
      <section className="table" css={kanjiTable}>
        {kanjiData.map((data) => (
          <KanjiCard key={data.utf16} data={data} />
        ))}
      </section>
    </Fragment>
  )
}

function Content() {
  const example = kanjiData[19]
  return (
    <Fragment>
      <h1>Introducción</h1>
      <p>
        El sistema de escritura japonés hace uso extenso de los caracteres
        llamados <b>kanji</b>. Son caracteres que fueron creados en China hace
        más de 3,000 años. Fueron introducidos en Japón junto con el budismo en
        el siglo III. Antes de eso Japón no tenía un sistema de escritura.
      </p>
      <p>
        El hiragana y el katakana están basados en el kanji. Fueron
        desarrollados entre el siglo VIII y el siglo X con el propósito de hacer
        más rápida y fácil la escritura de palabras en japonés. Mientras que el
        hiragana es resultado de la simplificación de trazos usados en los
        kanji, el katakana surgió de tomar algunas secciones de los mismos.
      </p>
      <p>
        A diferencia del chino, los kanji japoneses usualmente tienen más de una
        pronunciación, la cual depende del contexto en el que se encuentre en
        una oración. Existen 2,136 kanjis de &quot;uso regular&quot;, los cuales
        son combinados para crear las decenas de miles de palabras del idioma
        japonés.
      </p>
      <Callout>
        Cada kanji posee su propia forma, sonido(s) y significado(s).
      </Callout>
      <h2>Radicales</h2>
      <p>
        Los kanji están compuestos de una serie de trazos predefinidos llamados{" "}
        <b>radicales</b>. En japonés cada uno de estos trazos tienen un nombre
        específico, aunque para su enseñanza en otro idioma suelen tener nombres
        arbitrarios para facilitar su memorización.
      </p>
      <Callout>
        Casi todos los kanji en realidad son una combinación de dos o más
        radicales.
      </Callout>
      <h2>Pronunciaciones</h2>
      <p>
        Hay dos formas básicas en las que los kanjis pueden ser leídos: la
        pronunciación <b>onyomi</b> o china, y la pronunciación <b>kunyomi</b> o
        japonesa.
      </p>
      <Example>
        <Kj>石</Kj> → onyomi: <K>セキ、シャク</K> <R>SEKI, SHAKU</R> kunyomi:{" "}
        <H>いし</H> <R>ishi</R>
      </Example>
      <p>
        En gran cantidad de diccionarios por convención se utiliza katakana o
        rōmaji en mayúsculas para indicar la pronunciación china y hiragana o
        rōmaji en minúsculas para indicar la pronunciación japonesa. En otro
        tipo de textos se utiliza exclusivamente el hiragana para indicar las
        pronuniciaciones.
      </p>
      <Note>
        <b>Nota: </b>Dependiendo de la fuente que sea consultada se puede
        encontrar el mismo o un formato distinto.
      </Note>{" "}
      <h2>Furigana</h2>
      <p>
        Es el acompañamiento del hiragana para indicar la pronunciación de un
        kanji.
      </p>
      <h2>Okurigana</h2>
      <p>
        Es el uso de hiragana en combinación con el kanji para formar una
        palabra distinta. Usualmente son las conjugaciones de los verbos.
      </p>
      <h2>Los tipos de kanji</h2>
      <p>Los kanji japoneses pueden ser divididos en 4 tipos básicos:</p>
      <ul>
        <li>
          Pictogramas (imágenes de objetos):　
          <Example>
            <Kj>山</Kj> [montaña], <Kj>田</Kj> [campo de arroz], <Kj>川</Kj>{" "}
            [río]
          </Example>
        </li>
        <li>
          Ideogramas simples (imágenes de ideas):　
          <Example>
            <Kj>三</Kj> [tres], <Kj>上</Kj> [arriba], <Kj>中</Kj> [en medio]
          </Example>
        </li>
        <li>
          Ideogramas compuestos (varios pictogramas que forman uno solo):　
          <Example>
            <Kj>森</Kj> [bosque]: formado por tres <Kj>木</Kj> [árbol]
          </Example>
        </li>
        <li>
          Ideogramas de sonido (una combinación de caracteres: unos usados por
          su significado y otros por su sonido):　
          <Example>
            <Kj>語</Kj> <R>go</R> [lenguaje]: formado por <Kj>言</Kj> [palabra],{" "}
            <Kj>口</Kj> [boca] y <Kj>五</Kj> <R>go</R>
          </Example>
        </li>
      </ul>
      <Callout>
        Alrededor del 80% de los kanjis son ideogramas de sonido compuestos.
      </Callout>
      <h1>Escritura</h1>
      <h2>Reglas generales</h2>
      <ul>
        <li>Los trazos son escritos de izquierda a derecha.</li>
        <CharAnimation name="5ddd" />
        <li>Los trazos son escritos de arriba hacia abajo.</li>
        <CharAnimation name="4e09" />
        <li>
          Cuando una línea horizontal y una vertical se cruzan, la horizontal se
          dibuja primero.
        </li>
        <CharAnimation name="5341" />
        <li>
          Cuando una línea horizontal está unida a una vertical, la vertical se
          dibuja primero
        </li>
        <CharAnimation name="4e0a" />
        <li>
          Cuando hay un arreglo de tres trazos izquierda-en medio-derecha y el
          trazo central se dibuja primero si es el más largo.
        </li>
        <CharAnimation name="5c0f" />
        <li>
          Cuando las partes izquierda y derecha tienen trazos inclinados, la
          parte izquierda se dibuja primero.
        </li>
        <CharAnimation name="4eba" />
        <li>Cuando hay líneas exteriores, estas son dibujadas primero.</li>
        <CharAnimation name="6708" />
        <li>
          Cuando el centro de un kanji es rodeado por una caja, el centro es
          dibujado primero antes de la línea inferior de la caja.
        </li>
        <CharAnimation name="7530" />
        <li>Cuando una línea atraviesa el centro, es dibujada al final.</li>
        <CharAnimation name="4e2d" />
      </ul>
      <Note>
        <b>Nota: </b>Dependiendo de la referencia que se consulte se pueden
        encontrar más reglas o menos reglas.
      </Note>
      <h2>Tipos de trazos</h2>
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
      <Callout>
        Dependiendo de la tipografía, puede que los trazos luzcan distintos a
        como lucen escritos a mano.
      </Callout>
      <h1>Tablas de kanji</h1>
      <p>
        En esta sección encontrarás diferentes grupos de cartas divididas por
        grados, correspondientes al orden en que se enseñan en las escuelas de
        Japón. Cada tarjeta contiene información sobre un kanji específico.
      </p>
      <div css={kanjiTable}>
        <KanjiCard data={example} />
      </div>
      <p>
        Del lado izquierdo se encuentra el <b>caracter</b>, el número de{" "}
        <b>trazos</b> que se necesitan para escribirlo y el <b>número</b> según
        el orden encontrado en el libro The Complete Guide To Japanese Kanji.{" "}
        <u>
          Al dar click en <b>Trazos</b> cambiará la visualización del caracter
        </u>
        . Aparecerán nuevos botones, con los que podrás reproducir, pausar y
        reiniciar la animación del orden de los trazos.
      </p>
      <p>
        Del lado derecho se encuentran las pronunciaciones <b>on-yomi</b>{" "}
        (China) y <b>kun-yomi</b> (Japonesa) así como los posibles{" "}
        <b>significados</b>.{" "}
        <u>
          Al dar click en las <b>pronunciaciones</b> cambiará su visualización
        </u>
        , de kana a rōmaji y vice versa.
      </p>
      <Note>
        <b>Nota: </b>En el estudio de los kanji usualmente se hace uso del
        katakana o del rōmaji en mayúsculas para indicar la pronunciación
        on-yomi. Mientras que el hiragana o el rōmaji en minúsculas se usa para
        indicar la pronuncación kun-yomi. Esta página hace uso de ese formato.
        Es posible que otras fuentes manejen un formato distinto.
      </Note>
      <p>
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
      </p>
      <Note>
        <b>Nota: </b>Estos signos pueden ser encontrados en algunos diccionarios
        para dividir entre los kanjis y el vocabulario en el que son usados, al
        igual que en esta página. Es posible que otras fuentes utilicen un
        formato distinto.
      </Note>
    </Fragment>
  )
}

const Bibliography = () => {
  return (
    <Fragment>
      <CiteSource source="kanjiVG" />
      <p>
        Parte de la información de este sitio se puede consultar en las
        siguientes referencias:
      </p>
      <ul>
        <CiteSource source="practicalKanji" />
      </ul>
    </Fragment>
  )
}
