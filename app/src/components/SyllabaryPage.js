import React, { Fragment } from "react"
import { Route, useRouteMatch } from "react-router-dom"
import { pink } from "../utils"
import { H1, H2, P1, P2 } from "../utils"
import NavBar from "./NavBar"
import SyllabaryType from "./SyllabaryType"
import Table from "./Table"

const links = [
  {
    to: `/hiragana/basico`,
    children: <span>Hiragana</span>,
  },
  {
    to: `/katakana/basico`,
    children: <span>Katakana</span>,
  },
  {
    to: `/romaji/basico`,
    children: <span>Romaji</span>,
  },
]

export default function SyllabaryPage() {
  const { path, url } = useRouteMatch()
  return (
    <div id="syllabary-page">
      <NavBar id="syllabary-navbar" links={links} path={path} color={pink} />
      <Route exact path={`${url}/`}>
        <Content />
      </Route>
      <Route path={`${url}/:syllabary`}></Route>
      <Route path={`${url}/:syllabary/:type`}>
        <SyllabaryType />
        <Table />
      </Route>
    </div>
  )
}

const Content = () => {
  return (
    <Fragment>
      <H1>Silabarios</H1>
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
      <H2>
        <strong>Hiragana</strong>
      </H2>
      <P1>
        El <strong>hiragana</strong> es el silabario que nos ayuda a leer
        palabras y frases cuando somos principiantes. También contribuye en gran
        medida a aprender el 3er sistema de escritura: el <em>kanji</em>. En la
        gramática, el hiragana es usado para escribir las distintas partículas,
        las partes conjugadas de verbos y adjetivos, así como palabras que no
        tienen kanji.
      </P1>
      <P2>Es el conjunto de caracteres que tienen trazos redondeados.</P2>
      <H2>
        <strong>Katakana</strong>
      </H2>
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
      <P2>
        Es el conjunto de caracteres que tienen trazos rectos y angulares.
      </P2>
      <H1>
        <strong>Rōmaji</strong>
      </H1>
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
      <h1>
        <strong>Escritura y pronunciación del japonés</strong>
      </h1>
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
      <P1>Todos los sonidos del japonés tienen una duración similar.</P1>
      <P1>[Tabla de caracteres - falta agregar]</P1>
      <P1>
        En el japonés es común encontrar palabras homónimas, es decir, que se
        escriben y pronuncian igual pero que tienen significados diferentes.
        Para diferenciar entre ellas, muchas veces se recurre al contexto; en el
        caso de la lectura y escritura, se pueden diferenciar por el kanji que
        utilizan.
      </P1>
      <P1>(kami) 紙 [papel] ≠ 髪 [cabello]</P1>
      <h2>
        <strong>Vocal larga</strong>
      </h2>
      <P1>
        La vocal larga tiene doble duración respecto a la vocal simple. Dicho de
        otra manera, mientras que あ se considera de una mora, ああ se considera
        de dos moras a pesar de que se pronuncien las dos de manera sucesiva. La
        diferencia en el largo de la vocal implica diferencias en el
        significado:
      </P1>
      <P1>おばさん (obasan) ≠ おばあさん (obaasan)</P1>
      <P1>ゆき (yuki) ≠ ゆうき (yuuki)</P1>
      <P1>え (e) ≠ ええ (ee)</P1>
      <P1>ここ (koko) ≠ こうこう (kookoo)</P1>
      <h3>
        <strong>Modo de escribir las vocales largas con hiragana:</strong>
      </h3>
      <ul>
        <li>Kanas de la columna あ: Se les agrega あ.</li>
        <li>Kanas de la columna い: Se les agrega い.</li>
        <li>Kanas de la columna う: Se les agrega う.</li>
        <li>Kanas de la columna え: Se les agrega い. (Hay excepciones)</li>
        <li>Kanas de la columna お: Se les agrega う. (Hay excepciones)</li>
      </ul>
      <h3>
        <strong>Modo de escribir las vocales largas con katakana:</strong>
      </h3>
      <ul>
        <li>Se agrega ー sin importar la vocal.</li>
      </ul>{" "}
      <P1>カレー [curry] カー　[car]</P1>
      <h3>
        <strong>Modo de escribir las vocales largas con rōmaji:</strong>
      </h3>
      <P1>
        Dependiendo del sistema rōmaji que se esté utilizando, puede ser escrito
        de diferentes maneras. Siguiendo las mismas reglas que en el caso de
        hiragana o utilizando el símbolo diacrítico: ¯ (macrón).
      </P1>
      <h2>
        <strong>Usos de ん ン (n)</strong>
      </h2>
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
      <h2>
        <strong>Diacríticos</strong>
      </h2>
      <P1>
        Son <strong>símbolos</strong> que puede ser añadidos a algunos{" "}
        <strong>kanas</strong> para cambiar su pronunciación. Existen dos de
        ellos: el primero es muy parecido a las comillas (<strong>〝</strong>) y
        es llamado <strong>dakuten</strong>; el segundo tiene la apariencia de
        un pequeño círculo ( ゜) y es llamado <strong>handakuten</strong>.
      </P1>
      <P1>
        Se utilizan los mismos símbolos para hiragaka y katakana. En el caso del
        rōmaji, las consonantes cambian a su respectivo sonido: k → g, s → z,
        etc.
      </P1>
      <P1>げ　ゲ　(ge)</P1>
      <P1>ぱ　パ　(pa)</P1>
      <h2>
        <strong>Combinaciones</strong>
      </h2>
      <P1>
        Se pueden combinar los kanas や ヤ (ya), ゆ ユ (yu), よ ヨ (yo) con
        algunos otros para formar nuevos sonidos de una sola mora (incluyendo
        los que utilizan dakuten). Cuando esto ocurre, los kanas de la fila (y)
        son <strong>escritas en pequeño</strong> para hacer notar que se están
        usando como combinación.
      </P1>
      <P1>びょ　ビョ (byo) en lugar de びよ　ビヨ (biyo)</P1>
      <h2>
        <strong>Uso de っ (つ pequeño)</strong>
      </h2>
      <P1>
        La diferencia se encuentra en el tamaño del caracter: al igual que las
        combinaciones, se escribe en pequeño para hacer una diferencia de
        pronunciación. Su trabajo es alargar el sonido de la consonante que va
        inmediatamente después de éste.
      </P1>
      <P1>Es un sonido que tiene duración de una mora.</P1>
      <P1>かった　≠　かた　(katta ≠ kata)</P1>
      <P1>ベッド (beddo)</P1>
      <P1>
        La única excepción es la doble &quot;n&quot; ya que se escribe con ん
        (n) + kana de la fila (n), no con っ<strong>.</strong>
      </P1>
      <P1>
        さん<strong>に</strong>ん (san<strong>ni</strong>n)
      </P1>
      <h2>
        <strong>Vocales afónicas</strong>
      </h2>
      <P1>
        En algunas palabras, el sonido de vocales como (i) o (u) se pierde, es
        decir, no se pronuncia.
      </P1>
      <P1>
        すきです　(suki desu → s<del>u</del>ki des<del>u</del>)
      </P1>
      <h2>
        <strong>Acento</strong>
      </h2>
      <P1>
        El japonés es un idioma con acento de tono, dicho de otra forma, una
        palabra contiene moras de tono alto y moras de tono bajo. En algunos
        casos esta variación puede hacer que exista una diferencia entre
        palabras que utilizan los mismos kanas para diferenciar entre ellas.
      </P1>
      <P1>
        あめ (áme) [lluvia] ≠ あめ (amé) [caramelo] donde el kana subrayado
        indica el tono alto
      </P1>
      <P1>
        Cada una de estas palabras tiene un kanji asignado: 雨 y 飴
        respectivamente. En cuanto a la escritura/lectura, puede ser
        diferenciado con su propio caracter, mientras que para la pronunciación
        se puede diferenciar con el tono.
      </P1>
      <h2>
        <strong>Detalles del katakana</strong>
      </h2>
      <h3>
        <strong>Caracteres extendidos</strong>
      </h3>
      <P1>
        El katakana ofrece un rango extendido de caracteres para representar
        sonidos que no existen en el japonés, pero sí en otras lenguas.
      </P1>
    </Fragment>
  )
}
