import React from "react"
import { Route, useRouteMatch, useParams } from "react-router-dom"
import { H1, H2, H3, P1, Callout, Example, PageStyled } from "../utils"
import styled from "@emotion/styled"
import Table from "./Table"
import Sidebar from "./Sidebar"

const syllabaries = ["hiragana", "katakana", "romaji"]

const types = ["basico", "dakuten", "combinacion"]
const typesExtended = ["basico", "dakuten", "combinacion", "extendido"]

const PageHeader = () => {
  const { syllabary } = useParams()
  return <H1 className="flex-center">{syllabary.toUpperCase()}</H1>
}

const Tables = () => {
  const { syllabary } = useParams()
  if (syllabary === "hiragana")
    return types.map((type) => <Table key={type} type={type} />)
  if (syllabary === "katakana" || syllabary === "romaji")
    return typesExtended.map((type) => <Table key={type} type={type} />)
  return <p>Selecciona un silabario</p>
}

export default function SyllabaryPage() {
  const { url } = useRouteMatch()
  return (
    <PageStyled id="syllabary-page">
      <Sidebar title="Tablas" links={syllabaries} />
      <div className="main-content">
        <Route exact path={`${url}/`}>
          <Content />
        </Route>
        <Route path={`${url}/:syllabary`}>
          <PageHeader />
          <Tables />
        </Route>
      </div>
    </PageStyled>
  )
}

const Content = () => {
  return (
    <div className="content">
      <H1>Silabarios</H1>
      <hr></hr>
      <P1>
        El <em>hiragana</em> y el <em>katakana</em> son silabarios, es decir,
        conjuntos de caracteres que representan sílabas llamadas{" "}
        <strong>kana</strong>. Por ejemplo: ま es el hiragana que representa el
        sonido o sílaba &quot;ma&quot;, mientras que マ es el katakana que
        representa el mismo sonido. Ambos silabarios contienen casi los mismos
        sonidos, pero se escriben diferente. Es muy parecido a escribir
        &quot;A&quot; y &quot;a&quot; en el español, sólo que cada silabario
        tiene usos más específicos. (No son utilizados como minúsculas y
        mayúsculas).
      </P1>
      <H2>Hiragana</H2>
      <P1>
        El <strong>hiragana</strong> es el silabario que nos ayuda a leer
        palabras y frases cuando somos principiantes. También contribuye en gran
        medida a aprender el 3er sistema de escritura: el <em>kanji</em>. En la
        gramática, el hiragana es usado para escribir las distintas partículas,
        las partes conjugadas de verbos y adjetivos, así como palabras que no
        tienen kanji.
      </P1>
      <Callout>
        Es el conjunto de caracteres que tienen trazos redondeados.
      </Callout>
      <H2>Katakana</H2>
      <P1>
        El uso más común del <strong>katakana</strong> es para transcribir
        palabras de otros idiomas. El único inconveniente es que el japonés
        tiene un rango de sonidos limitado y algunas de las palabras transcritas
        pueden tener una pronunciación diferente a la de la lengua original. Por
        ejemplo, la palabra ホテル contiene tres caracteres del katakana:
        &quot;ho&quot;, &quot;te&quot;, y &quot;ru&quot;, formando la palabra
        &quot;hoteru&quot;, la cual es tomada del inglés &quot;hotel&quot;.
        Asimismo, el katakana es utilizado para escribir nombres de empresas,
        onomatopeyas, o incluso para crear énfasis.
      </P1>
      <Callout>
        Es el conjunto de caracteres que tienen trazos rectos y angulares.
      </Callout>
      <H1>Romaji</H1>
      <P1>
        Es la romanización de los caracteres japoneses, es decir, el uso del
        abecedario al que estamos acostumbrados en el español y otros idiomas, y
        funciona para que los extranjeros podamos leer fácilmente el japonés.
        Existen diferentes sistemas de rōmaji, siendo el{" "}
        <strong>Hepburn</strong> el más común. Puede encontrarse en señales y
        letreros, nombres de empresas, productos, libros de texto, etc.
      </P1>
      <P1>
        A pesar de utilizar los mismos caracteres que el español, la
        pronunciación de algunas letras es distinta. Los sonidos vocales son más
        fieles al español, mientras que los sonidos consonantes son más
        parecidos al inglés.
      </P1>
      <P1>
        En el estudio serio de la lengua japonesa, usar rōmaji por completo
        puede ser contraproducente y es recomendado únicamente para aprender los
        silabarios. Para turismo, su uso es mucho más común ya que facilita el
        aprendizaje de frases completas sin la necesidad de comprender la
        gramática ni la correcta ortografía.
      </P1>
      <H1>Escritura y pronunciación del japonés</H1>
      <P1>
        El <strong>hiragana</strong> y <strong>katakana</strong> son silabarios
        cuyos caracteres corresponden a una <strong>mora</strong> (unidad de
        sonido), y que por sí solos no tienen un significado. Por otro lado, el{" "}
        <strong>kanji</strong> es formado por caracteres que representan tanto
        sonido como significado y pueden tener pronunciaciones de una o más
        moras. Las oraciones del japonés se expresan empleando tanto kanji como
        kana.
      </P1>
      <P1>
        El sonido del japonés se basa en cinco vocales: あ ア (a), い イ (i), う
        ウ (u), え エ (e), お オ (o). Todos los sonidos hablados provienen de
        estas cinco vocales, mismas que pueden ser utilizadas solas, junto con
        una consonante, o consonante más la semivocal &quot;y&quot;. La única
        excepción es ん ン (n), la cual es una consonante que puede tener sonido
        sin necesidad de combinarse con vocales.
      </P1>
      <Callout>
        Todos los sonidos del japonés tienen una duración similar.
      </Callout>
      <P1>[Tabla de caracteres - falta agregar]</P1>
      <P1>
        En el japonés es común encontrar palabras homónimas, es decir, que se
        escriben y pronuncian igual pero que tienen significados diferentes.
        Para diferenciar entre ellas, muchas veces se recurre al contexto; en el
        caso de la lectura y escritura, se pueden diferenciar por el kanji que
        utilizan.
      </P1>
      <Example>(kami) 紙 [papel] ≠ 髪 [cabello]</Example>
      <H2>Vocal larga</H2>
      <P1>
        La vocal larga tiene doble duración respecto a la vocal simple. Dicho de
        otra manera, mientras que あ se considera de una mora, ああ se considera
        de dos moras a pesar de que se pronuncien las dos de manera sucesiva. La
        diferencia en el largo de la vocal implica diferencias en el
        significado:
      </P1>
      <Example>おばさん (obasan) ≠ おばあさん (obaasan)</Example>
      <Example>ゆき (yuki) ≠ ゆうき (yuuki)</Example>
      <Example>え (e) ≠ ええ (ee)</Example>
      <Example>ここ (koko) ≠ こうこう (kookoo)</Example>
      <H3>Modo de escribir las vocales largas con hiragana:</H3>
      <ul>
        <li>Kanas de la columna あ: Se les agrega あ.</li>
        <li>Kanas de la columna い: Se les agrega い.</li>
        <li>Kanas de la columna う: Se les agrega う.</li>
        <li>Kanas de la columna え: Se les agrega い. (Hay excepciones)</li>
        <li>Kanas de la columna お: Se les agrega う. (Hay excepciones)</li>
      </ul>
      <H3>Modo de escribir las vocales largas con katakana:</H3>
      <ul>
        <li>Se agrega ー sin importar la vocal.</li>
      </ul>{" "}
      <Example>カレー [curry]</Example>
      <Example>カー　[car]</Example>
      <H3>Modo de escribir las vocales largas con romaji:</H3>
      <P1>
        Dependiendo del sistema rōmaji que se esté utilizando, puede ser escrito
        de diferentes maneras. Siguiendo las mismas reglas que en el caso de
        hiragana o utilizando el símbolo diacrítico: ¯ (macrón).
      </P1>
      <H2>Usos de ん ン (n)</H2>
      <P1>
        A pesar de ser un sonido de una mora de duración, nunca se coloca ん ン
        (n) al inicio de una palabra. Mientras que algunas referencias mencionan
        que la pronunciación de este caracter puede variar dependiendo de los
        sonidos que le siguen, esta diferencia no es lo suficientemente notable
        para respetarla en un inicio, sino sólo para tenerla en cuenta.
      </P1>
      <P1>
        En el rōmaji, estos cambios pueden notarse cuando se transcribe (m) en
        lugar de (n), dependiendo del sistema de romanización.
      </P1>
      <H2>Diacríticos</H2>
      <P1>
        Son <strong>símbolos</strong> que puede ser añadidos a algunos{" "}
        <strong>kanas</strong> para cambiar su pronunciación. Existen dos de
        ellos: el primero es muy parecido a las comillas (〝 ) y es llamado{" "}
        <strong>dakuten</strong>; el segundo tiene la apariencia de un pequeño
        círculo ( ゜) y es llamado <strong>handakuten</strong>.
      </P1>
      <P1>
        Se utilizan los mismos símbolos para hiragana y katakana. En el caso del
        rōmaji, las consonantes cambian a su respectivo sonido: k → g, s → z,
        etc.
      </P1>
      <Example>げ　ゲ　(ge)</Example>
      <Example>ぱ　パ　(pa)</Example>
      <H2>Combinaciones</H2>
      <P1>
        Se pueden combinar los kanas や ヤ (ya), ゆ ユ (yu), よ ヨ (yo) con
        algunos otros para formar nuevos sonidos de una sola mora (incluyendo
        los que utilizan dakuten). Cuando esto ocurre, los kanas de la fila (y)
        son <strong>escritas en pequeño</strong> para hacer notar que se están
        usando como combinación.
      </P1>
      <Example>
        びょ　ビョ　(byo)　
        <br />
        en lugar de　
        <br />
        びよ　ビヨ　(biyo)
      </Example>
      <H2>Uso de っ ッ (つ ツ (tsu) pequeño)</H2>
      <P1>
        La diferencia se encuentra en el tamaño del caracter: al igual que las
        combinaciones, se escribe en pequeño para hacer una diferencia de
        pronunciación. Su trabajo es alargar el sonido de la consonante que va
        inmediatamente después de éste.
      </P1>
      <Callout>Es un sonido que tiene duración de una mora.</Callout>
      <Example>かった　≠　かた　(katta ≠ kata)</Example>
      <Example>ベッド (beddo)</Example>
      <P1>
        La única excepción es la doble &quot;n&quot; ya que se escribe con ん
        (n) + kana de la fila (n), no con っ<strong>.</strong>
      </P1>
      <Example>
        さん<strong>に</strong>ん (san<strong>ni</strong>n)
      </Example>
      <H2>Vocales afónicas</H2>
      <P1>
        En algunas palabras, el sonido de vocales como (i) o (u) se pierde, es
        decir, no se pronuncia.
      </P1>
      <Example>
        すきです　(suki desu → s<del>u</del>ki des<del>u</del>)
      </Example>
      <H2>Acento</H2>
      <P1>
        El japonés es un idioma con acento de tono, dicho de otra forma, una
        palabra contiene moras de tono alto y moras de tono bajo. En algunos
        casos esta variación puede hacer que exista una diferencia entre
        palabras que utilizan los mismos kanas para diferenciar entre ellas.
      </P1>
      <Example>あめ (áme) [lluvia] ≠ あめ (amé) [caramelo]</Example>
      <P1>
        Cada una de estas palabras tiene un kanji asignado: 雨 y 飴
        respectivamente. En cuanto a la escritura/lectura, puede ser
        diferenciado con su propio caracter, mientras que para la pronunciación
        se puede diferenciar con el tono.
      </P1>
      <H2>Detalles del katakana</H2>
      <H3>Caracteres extendidos</H3>
      <P1>
        El katakana ofrece un rango extendido de caracteres para representar
        sonidos que no existen en el japonés, pero sí en otras lenguas.
      </P1>
    </div>
  )
}
