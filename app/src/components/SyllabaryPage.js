import React from "react"
import { Link, Route, useRouteMatch } from "react-router-dom"
import Sidebar from "./Sidebar"
import { Tables } from "./TableUtils"
import { PageStyled, H, K, Kj, R, Callout, Example, Note } from "../styling"

export default function SyllabaryPage() {
  const { url } = useRouteMatch()

  return (
    <PageStyled id="syllabary-page">
      <Sidebar>
        <ExtraLinks />
      </Sidebar>
      <div className="main-content">
        <Route exact path={`${url}/`}>
          <Content />
        </Route>
        <Route path={`${url}/:syllabary`}>
          <Tables />
        </Route>
      </div>
    </PageStyled>
  )
}

const ExtraLinks = () => {
  return (
    <div>
      <h4>Ir a</h4>
      <h5>Tablas</h5>
      <Link to="/silabarios/hiragana">Hiragana</Link>
      <Link to="/silabarios/katakana">Katakana</Link>
      <Link to="/silabarios/romaji">Romaji</Link>
    </div>
  )
}

const Content = () => {
  return (
    <div className="content">
      <h1>Introducción</h1>
      <hr />
      <p>
        El <b>hiragana</b> (<H>ひらがな</H>) y el <b>katakana</b> (
        <K>カタカナ</K>) son silabarios, es decir, conjuntos de caracteres que
        representan sílabas llamadas <b>kana</b>. Por ejemplo: <H>ま</H> es el
        hiragana que representa el sonido o sílaba &quot;ma&quot;, mientras que{" "}
        <K>マ</K> es el katakana que representa el mismo sonido. Ambos
        silabarios contienen casi los mismos sonidos.
      </p>
      <h2>Hiragana</h2>
      <p>
        El <b></b> es el silabario que nos ayuda a leer palabras y frases cuando
        somos principiantes. También contribuye en gran medida a aprender el 3er
        sistema de escritura: el <em>kanji</em> (<Kj>漢字</Kj>). En la
        gramática, el hiragana es usado para escribir las distintas partículas,
        las partes conjugadas de verbos y adjetivos, así como palabras que no
        tienen kanji.
      </p>
      <Callout>
        Es el conjunto de caracteres que tienen trazos redondeados.
      </Callout>
      <h2>Katakana</h2>
      <p>
        El uso más común del katakana es para transcribir palabras de otros
        idiomas. El único inconveniente es que el japonés tiene un rango de
        sonidos limitado y algunas de las palabras transcritas pueden tener una
        pronunciación diferente a la de la lengua original. Por ejemplo, la
        palabra <K>ホテル</K> contiene tres caracteres del katakana:
        &quot;ho&quot;, &quot;te&quot;, y &quot;ru&quot;, formando la palabra
        &quot;hoteru&quot;, la cual es tomada del inglés &quot;hotel&quot;.
        Asimismo, el katakana es utilizado para escribir nombres de empresas,
        onomatopeyas, o incluso para crear énfasis en una palabra u oración.
      </p>
      <Callout>
        Es el conjunto de caracteres que tienen trazos rectos y angulares.
      </Callout>
      <h2>Romaji</h2>
      <p>
        El <R>rōmaji</R> es la romanización de los caracteres japoneses, es
        decir, el uso del abecedario al que estamos acostumbrados en el español
        y otros idiomas, y funciona para que los extranjeros podamos leer
        fácilmente el japonés. Existen diferentes sistemas de rōmaji, siendo el{" "}
        <b>Hepburn</b> el más común. Puede encontrarse en señales y letreros,
        nombres de empresas, productos, libros de texto, etc.
      </p>
      <p>
        A pesar de utilizar los mismos caracteres que el español, la
        pronunciación de algunas letras es distinta. Los sonidos vocales son más
        fieles al español, mientras que los sonidos consonantes son más
        parecidos al inglés.
      </p>
      <p>
        En el estudio serio de la lengua japonesa, usar rōmaji por completo
        puede ser contraproducente y es recomendado únicamente para aprender los
        silabarios. Para turismo, su uso es mucho más común ya que facilita el
        aprendizaje de frases completas sin la necesidad de comprender la
        gramática ni la correcta ortografía.
      </p>
      <h1>Escritura y pronunciación del japonés</h1>
      <p>
        El <b>hiragana</b> y <b>katakana</b> son sistemas de escritura cuyos
        caracteres corresponden a una <b>mora</b> (unidad de sonido), y que por
        sí solos no tienen un significado. Por otro lado, el <b>kanji</b> es
        formado por caracteres que representan tanto sonido como significado y
        pueden tener pronunciaciones de una o más moras. Las oraciones del
        japonés se expresan empleando tanto kanji como kana.
      </p>
      <Callout>Todos los sonidos tienen una duración similar.</Callout>
      <p>
        El sonido del japonés se basa en cinco vocales: <H>あいうえお</H> -{" "}
        <K>アイウエオ</K> - <R>aiueo</R>. Todos los sonidos hablados provienen
        de estas cinco vocales, mismas que pueden ser utilizadas solas, junto
        con una consonante, o consonante más la semivocal &quot;y&quot;. La
        única excepción es ん ン (n), la cual es una consonante que puede tener
        sonido sin necesidad de combinarse con vocales.
      </p>
      <Callout>El orden de las vocales es diferente: aiueo</Callout>
      <b>
        <s>[Tabla de caracteres - falta agregar]</s>
      </b>
      <p>
        En el japonés es común encontrar palabras homónimas, es decir, que se
        escriben y pronuncian igual pero que tienen significados diferentes.
        Para diferenciar entre ellas, muchas veces se recurre al contexto; en el
        caso de la lectura y escritura, se pueden diferenciar por el kanji que
        utilizan.
      </p>
      <Example>
        <R>kami</R> <Kj>紙</Kj> [papel] ≠ <Kj>髪</Kj> [cabello]
      </Example>
      <h2>Vocal larga</h2>
      <p>
        La vocal larga tiene doble duración respecto a la vocal simple. Dicho de
        otra manera, mientras que <H>あ</H> se considera de una mora,{" "}
        <H>ああ</H> se considera de dos moras a pesar de que se pronuncien las
        dos de manera sucesiva. La diferencia en el largo de la vocal implica
        diferencias en el significado:
      </p>
      <Example>
        <H>おばさん</H> <R>obasan</R> ≠ <H>おばあさん</H> <R>obaasan</R>
      </Example>
      <Example>
        <H>ゆき</H> <R>yuki</R> ≠ <H>ゆうき</H> <R>yuuki</R>
      </Example>
      <Example>
        <H>え</H> <R>e</R> ≠ <H>ええ</H> <R>ee</R>
      </Example>
      <Example>
        <H>ここ</H> <R>koko</R> ≠ <H>こうこう</H> <R>kookoo</R>
      </Example>
      <h3>Vocales largas en hiragana:</h3>
      <ul>
        <li>
          Kanas de la columna <H>あ</H>: Se les agrega <H>あ</H>.
        </li>
        <li>
          Kanas de la columna <H>い</H>: Se les agrega <H>い</H>.
        </li>
        <li>
          Kanas de la columna <H>う</H>: Se les agrega <H>う</H>.
        </li>
        <li>
          Kanas de la columna <H>え</H>: Se les agrega <H>い</H>. (Hay
          excepciones)
        </li>
        <li>
          Kanas de la columna <H>お</H>: Se les agrega <H>う</H>. (Hay
          excepciones)
        </li>
      </ul>
      <h3>Vocales largas en katakana:</h3>
      <ul>
        <li>Se agrega ー sin importar la vocal.</li>
      </ul>{" "}
      <Example>
        <K>カレー</K> <R>karee</R> [curry]
      </Example>
      <Example>
        <K>カー</K> <R>kaa</R> [car]
      </Example>
      <h3>Vocales largas en romaji:</h3>
      <p>
        Dependiendo del sistema rōmaji que se esté utilizando, puede ser escrito
        de diferentes maneras. Siguiendo las mismas reglas que en el caso de
        hiragana o utilizando el símbolo diacrítico: ¯ (macrón) sobre la vocal
        que se quiera alargar.
      </p>
      <h2>Uso de ん ン n</h2>
      <p>
        A pesar de ser un sonido de una mora de duración, nunca se coloca ん ン
        (n) al inicio de una palabra. Mientras que algunas referencias mencionan
        que la pronunciación de este caracter puede variar dependiendo de los
        sonidos que le siguen, esta diferencia no es lo suficientemente notable
        para respetarla en un inicio, sino sólo para tenerla en cuenta.
      </p>
      <p>
        En el rōmaji, estos cambios pueden notarse cuando se transcribe (m) en
        lugar de (n), dependiendo del sistema de romanización.
      </p>
      <h2>Diacríticos</h2>
      <p>
        Son <em>símbolos</em> que puede ser añadidos a algunos <em>kanas</em>{" "}
        para cambiar su pronunciación. Existen dos de ellos: el primero es muy
        parecido a las comillas (〝 ) y es llamado <b>dakuten</b>; el segundo
        tiene la apariencia de un pequeño círculo ( ゜) y es llamado{" "}
        <b>handakuten</b>.
      </p>
      <p>
        Se utilizan los mismos símbolos para hiragana y katakana. En el caso del
        rōmaji, las consonantes cambian a su respectivo sonido: k → g, s → z,
        etc.
      </p>
      <Example>
        Dakuten: <H>け</H> <K>ケ</K> <R>ke</R> → <H>げ</H> <K>ゲ</K> <R>ge</R>
      </Example>
      <Example>
        Handakuten: <H>は</H> <K>ハ</K> <R>ha</R> → <H>ぱ</H> <K>パ</K>{" "}
        <R>pa</R>
      </Example>
      <h2>Combinaciones</h2>
      <p>
        Se pueden combinar los kanas <H>や ゆ よ</H> - <K>ヤ ユ ヨ</K> -{" "}
        <R>ya yu yo</R> con algunos otros para formar nuevos sonidos de una sola
        mora (incluyendo los que utilizan dakuten). Cuando esto ocurre, los
        kanas de la fila (y) son <b>escritas en pequeño</b> para hacer notar que
        se están usando como combinación.
      </p>
      <Example>
        <H>びょ</H> <K>ビョ</K> <R>byo</R> es diferente a <H>びよ</H>{" "}
        <K>ビヨ</K> <R>biyo</R>
      </Example>
      <h2>Uso de っ ッ (つ ツ tsu pequeño)</h2>
      <p>
        La diferencia se encuentra en el tamaño del caracter: al igual que las
        combinaciones, se escribe en pequeño para hacer una diferencia de
        pronunciación. Su trabajo es alargar el sonido de la consonante que va
        inmediatamente después de éste.
      </p>
      <Callout>Es un sonido que tiene duración de una mora.</Callout>
      <Example>
        <H>かった</H> <R>katta</R>　≠　<H>かた</H> <R>kata</R>
      </Example>
      <Example>
        <K>ベッド</K> <R>beddo</R>
      </Example>
      <p>
        La única excepción es la doble &quot;n&quot; ya que se escribe con{" "}
        <H>ん</H> <R>n</R> + kana de la fila (n), no con <H>っ</H>
        <b>.</b>
      </p>
      <Example>
        <H>さんにん</H> <R>sannin</R>
      </Example>
      <h2>Vocales afónicas</h2>
      <p>
        En algunas palabras, el sonido de vocales como (i) o (u) se pierde, es
        decir, no se pronuncia.
      </p>
      <Example>
        <H>すきです</H> (suki desu → s<s>u</s>ki des<s>u</s>)
      </Example>
      <h2>Acento</h2>
      <p>
        El japonés es un idioma con acento de tono, dicho de otra forma, una
        palabra contiene moras de tono alto y moras de tono bajo. En algunos
        casos esta variación puede hacer que exista una diferencia entre
        palabras que utilizan los mismos kanas para diferenciar entre ellas.
      </p>
      <Example>
        <H>あめ</H> <R>áme</R> [lluvia] ≠ <H>あめ</H> <R>amé</R> [caramelo]
      </Example>
      <Note>
        <b>Nota: </b>En este ejemplo el uso de tildes hace referencia a la parte
        de la palabra donde se eleva el tono. El rōmaji no hace uso de este
        signo diacrítico.
      </Note>
      <p>
        Esta diferencia es más notable cuando son escritas en kanji: 雨 y 飴
        respectivamente. En cuanto a la escritura/lectura, puede ser
        diferenciado con su propio caracter, mientras que para la pronunciación
        se puede diferenciar con el tono.
      </p>
      <h2>Detalles del katakana</h2>
      <h3>Caracteres extendidos</h3>
      <p>
        El katakana ofrece un rango extendido de caracteres para representar
        sonidos que no existen en el japonés, pero sí en otras lenguas.
      </p>
      <a href="/silabarios/katakana">Ir a tabla</a>
    </div>
  )
}
