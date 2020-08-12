/** @jsx jsx */
import { useEffect } from "react"
import { jsx } from "@emotion/core"
import kanjiData from "../utils/json/kanji-1-80.json"
import KanjiCard from "./KanjiCard"
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
import Sidebar from "./Sidebar"

export default function KanjiPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageStyled id="kanji-page">
      <Sidebar />
      <div className="main-content">
        <Content />
        <KanjiTable />
        <Bibliography />
      </div>
    </PageStyled>
  )
}

function KanjiTable() {
  return (
    <div>
      <h2 className="text-center">Kanji de Primer Grado</h2>
      <h3 className="text-center">1 - 80</h3>
      <section className="table" css={kanjiTable}>
        {kanjiData.map((data) => (
          <KanjiCard key={data.utf16} data={data} />
        ))}
      </section>
    </div>
  )
}

function Content() {
  const example = kanjiData[19]
  return (
    <div className="content">
      <h1>Introducción</h1>
      <p>
        El sistema de escritura japonés hace uso extenso de los caracteres
        llamados <b>kanji</b>. Son caracteres que fueron creados en China hace
        más de 3,000 años. Fueron introducidos en Japón junto con el budismo en
        el siglo III. Antes de eso Japón no tenía un sistema de escritura.
      </p>
      <Callout>
        {" "}
        Cada kanji posee su propia forma, sonido y significado.
      </Callout>
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
      <h2>Radicales</h2>
      <p>
        Los kanji están compuestos de una serie de trazos predefinidos llamados{" "}
        <b>radicales</b>. En japonés cada uno de estos trazos tienen un nombre
        específico, aunque para su enseñanza en otro idioma suelen tener nombres
        arbitrarios para facilitar su memorización.
      </p>
      <Callout>
        Casi todos los kanji son en realidad una combinación de dos o más
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
        rōmaji en minúsculas para indicar la pronunciación japonesa.
      </p>
      <Note>
        <b>Nota: </b>Dependiendo de la fuente que sea consultada se puede
        encontrar el mismo o un formato distinto.
      </Note>{" "}
      <p>
        En otro tipo de textos como mangas se utiliza exclusivamente el hiragana
        para indicar las pronuniciaciones.
      </p>
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
            <Kj>山</Kj>, <Kj>田</Kj>, <Kj>川</Kj>
          </Example>
        </li>
        <li>
          Ideogramas simples (imágenes de ideas):　
          <Example>
            <Kj>三</Kj>, <Kj>上</Kj>, <Kj>中</Kj>
          </Example>
        </li>
        <li>
          Ideogramas compuestos (varios pictogramas que forman uno solo):　
          <Example>
            <Kj>森</Kj>,<Kj>町</Kj>, <Kj>物</Kj>
          </Example>
        </li>
        <li>
          Ideogramas de sonido (una combinación de caracteres: unos usados por
          su sonido y otros usados por su significado):　
          <Example>
            <Kj>英</Kj>, <Kj>語</Kj>, <Kj>曜</Kj>
          </Example>
        </li>
      </ul>
      <Callout>
        Alrededor del 80% de los kanjis son ideogramas de sonido compuestos.
      </Callout>
      <h2>Escritura</h2>
      <h3>Reglas generales</h3>
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
      <Note>
        <b>Nota: </b>Dependiendo de la referencia que se consulte se pueden
        encontrar más reglas o menos reglas.
      </Note>
      <h3>Tipos de trazos</h3>
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
        Dependiendo de la tipografía, puede que los trazos luzcan de distintos a
        como lucen escritos a mano.
      </Callout>
      <h2>Cómo usar esta página</h2>
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
    </div>
  )
}

function Bibliography() {
  return (
    <div id="bibliography" className="content">
      <p>
        Las animaciones de trazado están basadas en datos proporcionados por{" "}
        <a href="http://kanjivg.tagaini.net/">KanjiVG</a>.
      </p>
      <p>
        Parte de la información de este sitio se puede consultar en las
        siguientes referencias:
      </p>
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
