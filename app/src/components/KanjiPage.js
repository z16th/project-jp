/** @jsx jsx */
import { jsx } from "@emotion/core"
import kanjiData from "../utils/json/kanji-1-80.json"
import KanjiCard from "./KanjiCard"
import { PageStyled, kanjiTable } from "../styling"
import Sidebar from "./Sidebar"

export default function KanjiPage() {
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
      <h1>Kanji</h1>
      <hr />
      <p>
        El sistema de escritura japonés hace uso extenso de los caracteres
        llamados <strong>kanji</strong>. Son caracteres que fueron creados en
        China hace más de 3,000 años. Cada kanji posee su propia forma, sonido y
        significado. Fueron introducidos en Japón junto con el budismo en el
        siglo III. Antes de eso Japón no tenía un sistema de escritura.
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
      <h2>Los radicales</h2>
      <p>
        Los kanji están compuestos de una serie de trazos predefinidos llamados{" "}
        <strong>radicales</strong>. En japonés cada uno de estos trazos tienen
        un nombre específico, aunque para su enseñanza en otro idioma suelen
        tener nombres arbitrarios para facilitar su memorización. Ya que casi
        todos los kanji son en realidad una combinación de dos o más radicales,
        puede ser de gran utilidad aprenderlos.
      </p>
      <h2>Las pronunciaciones</h2>
      <p>
        Hay dos formas básicas en las que los kanjis pueden ser leídos: la
        pronunciación <strong>on-yomi</strong> o china, y la pronunciación{" "}
        <strong>kun-yomi</strong> o japonesa.
      </p>
      <p>石 → on-yomi: セキ、シャク (SEKI, SHAKU) kun-yomi: いし (ishi)</p>
      <p>
        Por convención se utiliza katakana o rōmaji en mayúsculas para indicar
        la pronunciación china y hiragana o rōmaji en minúsculas para indicar la
        pronunciación japonesa aunque otras fuentes pueden llegar a utilizar un
        formato distinto.
      </p>
      <h2>Los tipos de kanji</h2>
      <p>Los kanji japoneses pueden ser divididos en 4 tipos básicos:</p>
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
      <p>
        Alrededor del 80% de los kanjis son ideogramas de sonido compuestos.
      </p>
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
      <p>
        Dependiendo de la referencia que se consulte se pueden encontrar más
        reglas o menos reglas.
      </p>
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
      <p>
        Dependiendo de la tipografía, es probable que los trazos luzcan de una
        manera distinta a como lucen escritos a mano.
      </p>
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
      <p>
        <b>Nota: </b>En el estudio de los kanji usualmente se hace uso del
        katakana o del rōmaji en mayúsculas para indicar la pronunciación
        on-yomi. Mientras que el hiragana o el rōmaji en minúsculas se usa para
        indicar la pronuncación kun-yomi. Esta página hace uso de ese formato.
        Es posible que otras fuentes manejen un formato distinto.
      </p>
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
      <p>
        <b>Nota: </b>Estos signos pueden ser encontrados en algunos diccionarios
        para dividir entre los kanjis y el vocabulario en el que son usados, al
        igual que en esta página. Es posible que otras fuentes utilicen un
        formato distinto.
      </p>
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
