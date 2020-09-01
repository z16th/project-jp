import React, { useEffect } from "react"
import { Link, Route, Switch, useRouteMatch } from "react-router-dom"
import { PageStyled, H, K, Kj, R, Callout, Example, Note } from "../styling"

import Sidebar from "./Sidebar"
import CiteSource from "./CiteSource"
import Bibliography from "./Bibliography"

const TablesSubpage = React.lazy(() => import("./TablesSubpage"))

export default function SyllabaryPage() {
  const { url } = useRouteMatch()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageStyled id="syllabary-page">
      <Sidebar>
        <Route exact path={`${url}/`}>
          <Link to={`${url}/tablas`}>Tablas de silabarios</Link>
        </Route>
      </Sidebar>

      <div className="main-content">
        <Switch>
          <Route exact path={`${url}/`}>
            <Content />
            <Bibliography>
              <p>
                Parte de la información encontrada esta página puede consultarse
                en las siguientes referencias:
              </p>
              <ul>
                <li>
                  <CiteSource source="minnaNoNihongo" />
                </li>
                <li>
                  <CiteSource source="genki" />
                </li>
              </ul>
            </Bibliography>
          </Route>
          <Route path={`${url}/tablas`}>
            <React.Suspense
              fallback={
                <div className="content" style={{ height: "100vh" }}>
                  <h1>Cargando</h1>
                </div>
              }
            >
              <TablesSubpage />
            </React.Suspense>
          </Route>
          <Route path="*">
            <div className="content">
              <h1>Página no encontrada</h1>
            </div>
          </Route>
        </Switch>
      </div>
    </PageStyled>
  )
}

const Content = () => {
  const { url } = useRouteMatch()

  return (
    <div className="content">
      <h1>Introducción</h1>
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
        Es el silabario que nos ayuda a leer palabras y frases cuando somos
        principiantes. También contribuye en gran medida a aprender el 3er
        sistema de escritura: el <em>kanji</em> (<Kj>漢字</Kj>). En la
        gramática, el hiragana es usado para escribir las distintas partículas,
        las partes conjugadas de verbos y adjetivos, así como palabras que no
        tienen kanji.
      </p>
      <Callout>
        Es el conjunto de caracteres que tiene trazos redondeados.
      </Callout>
      <Link className="link-to" to={`${url}/tablas?silabario=hiragana`}>
        Ir a Tablas de Hiragana.
      </Link>
      <h2>Katakana</h2>
      <p>
        El uso más común del katakana es transcribir palabras de otros idiomas.
        Ya que el japonés tiene un rango de sonidos limitado, algunas de las
        palabras transcritas pueden tener una pronunciación diferente a la de la
        lengua original. Por ejemplo, la palabra <K>ホテル</K> contiene tres
        caracteres del katakana: <R>ho</R>, <R>te</R>, <R>ru</R>, formando la
        palabra <R>hoteru</R>, la cual es tomada del inglés &quot;hotel&quot;.
        Asimismo, el katakana es utilizado para escribir nombres de empresas,
        onomatopeyas, o incluso para crear énfasis en una palabra u oración.
      </p>
      <Callout>
        Es el conjunto de caracteres que tiene trazos rectos y angulares.
      </Callout>
      <Link className="link-to" to={`${url}/tablas?silabario=katakana`}>
        Ir a Tablas de Katakana.
      </Link>
      <h2>Romaji</h2>
      <p>
        El <R>rōmaji</R> (<K>ローマ</K>
        <Kj>字</Kj>) es la romanización de los caracteres japoneses, es decir,
        el uso del abecedario al que estamos acostumbrados en el español y otros
        idiomas, y funciona para que los extranjeros podamos leer fácilmente el
        japonés. Existen diferentes sistemas de rōmaji, siendo el <b>Hepburn</b>{" "}
        el más común. Puede encontrarse en señales y letreros, nombres de
        empresas, productos, libros de texto, etc.
      </p>
      <p>
        A pesar de utilizar los mismos caracteres que el español, la
        pronunciación de algunas letras es distinta. Los sonidos vocales son más
        fieles al español, mientras que los sonidos consonantes son más
        parecidos al inglés.
      </p>
      <Link className="link-to" to={`${url}/tablas?silabario=romaji`}>
        Ir a Tablas de Romaji.
      </Link>
      <p>
        En el estudio serio de la lengua japonesa, usar rōmaji por completo
        puede ser contraproducente y es recomendado únicamente para aprender los
        silabarios. Para turismo, su uso es mucho más común ya que facilita el
        aprendizaje de frases completas sin la necesidad de comprender la
        gramática ni la correcta pronunciación/ortografía.
      </p>
      <h1>Escritura y pronunciación del japonés</h1>
      <p>
        El <b>hiragana</b> y <b>katakana</b> son sistemas de escritura cuyos
        caracteres corresponden a una <b>mora</b> (unidad de sonido), y que por
        sí solos no tienen un significado. Por otro lado, el <b>kanji</b> es
        formado por caracteres que representan tanto sonido como significado y
        pueden tener pronunciaciones de una o más moras.
      </p>
      <Callout>
        Las oraciones del japonés se expresan empleando tanto kanji como kana.
      </Callout>
      <h2>Caracteres básicos</h2>
      <p>
        El sonido del japonés se basa en cinco vocales: <H>あいうえお</H> -{" "}
        <K>アイウエオ</K> - <R>aiueo</R>. Todos los sonidos hablados provienen
        de estas cinco vocales, mismas que pueden ser utilizadas solas, junto
        con una consonante, o consonante más la semivocal &quot;y&quot;. La
        única excepción es <H>ん</H> <K>ン</K> <R>n</R>, la cual es una
        consonante que puede tener sonido sin necesidad de combinarse con
        vocales.
      </p>
      <Callout>El orden de las vocales es diferente: aiueo</Callout>
      <Link
        className="link-to"
        to={`${url}/tablas?silabario=hiragana&silabario=katakana&silabario=romaji&tipo=basico`}
      >
        Ir a Tablas de caracteres básicos.
      </Link>
      <h2>Caracteres con diacríticos</h2>
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
      <Link
        className="link-to"
        to={`${url}/tablas?silabario=hiragana&silabario=katakana&silabario=romaji&tipo=diacritico`}
      >
        Ir a Tablas de caracteres con diacríticos.
      </Link>
      <h2>Caracteres combinados</h2>
      <p>
        Se pueden combinar los kanas <H>や, ゆ, よ</H> - <K>ヤ, ユ, ヨ</K> -{" "}
        <R>ya, yu, yo</R> con algunos otros para formar nuevos sonidos de una
        sola mora (incluyendo los que utilizan dakuten). Cuando esto ocurre, los
        kanas de la fila (y) son <b>escritas en pequeño</b> para hacer notar que
        se están usando como combinación.
      </p>
      <Example>
        <H>びょ</H> <K>ビョ</K> <R>byo</R> es diferente a <H>びよ</H>{" "}
        <K>ビヨ</K> <R>biyo</R>
      </Example>
      <Link
        className="link-to"
        to={`${url}/tablas?silabario=hiragana&silabario=katakana&silabario=romaji&tipo=combinacion`}
      >
        Ir a Tablas de caracteres combinados.
      </Link>
      <h2>Caracteres extendidos</h2>
      <p>
        El katakana ofrece un rango extendido de caracteres para representar
        sonidos que no existen en el japonés, pero sí en otras lenguas.
      </p>
      <p>
        Otras referencias pueden contener un número distinto de caracteres
        extendidos. Incluso pueden llegar usar sus equivalentes en hiragana.
      </p>
      <Link
        className="link-to"
        to={`${url}/tablas?silabario=katakana&silabario=romaji&tipo=extendido`}
      >
        Ir a Tablas de caracteres extendidos.
      </Link>
      <h2>Homónimos</h2>
      <p>
        En el japonés es común encontrar palabras homónimas, es decir, que se
        escriben y pronuncian igual pero que tienen significados diferentes.
        Para diferenciar entre ellas, muchas veces se recurre al contexto; en el
        caso de la lectura/escritura, se pueden diferenciar por el kanji que
        utilizan.
      </p>
      <Example>
        <R>kami</R> <H>かみ</H> [papel] y <H>かみ</H> [cabello] cuando son
        escritos en hiragana
      </Example>
      <Example>
        <Kj>紙</Kj> y <Kj>髪</Kj> cuando son escritos en kanji.
      </Example>
      <h2>Vocal larga</h2>
      <p>
        La vocal larga tiene doble duración respecto a la vocal simple. Dicho de
        otra manera, mientras que <H>あ</H> - <K>ア</K> - <R>a</R> se considera
        de una mora, <H>ああ</H> - <K>アー</K> - <R>ā</R> se considera de dos
        moras a pesar de que se pronuncien las dos de manera sucesiva.
      </p>
      <h3>Vocales largas en hiragana</h3>
      <ul>
        <li>
          Kanas de la columna <H>あ</H>: se les agrega <H>あ</H>.
          <Example>
            <H>おかあさん</H> <R>okāsan</R> [madre]
          </Example>
        </li>
        <li>
          Kanas de la columna <H>い</H>: se les agrega <H>い</H>.
          <Example>
            <H>おにいさん</H> <R>oniisan</R> [hermano mayor]
          </Example>
        </li>
        <li>
          Kanas de la columna <H>う</H>: se les agrega <H>う</H>.
          <Example>
            <H>じゅう</H> <R>jū</R> [diez]
          </Example>
        </li>
        <li>
          Kanas de la columna <H>え</H>: se les agrega <H>い</H>. (Hay
          excepciones)
          <Example>
            <H>せんせい</H> <R>sensei</R>
          </Example>
          <Example>
            <b>Excepción: </b>
            <H>おねえさん</H> <R>onēsan</R> [hermana mayor]
          </Example>
        </li>
        <li>
          Kanas de la columna <H>お</H>: se les agrega <H>う</H>. (Hay
          excepciones)
          <Example>
            <H>おとうさん</H> <R>otōsan</R> [padre]
          </Example>
          <Example>
            <b>Excepción:</b> <H>おおきい</H> <R>ōkii</R> [grande]
          </Example>
        </li>
      </ul>
      <Callout>
        La duración de la vocal puede implicar diferencias en el significado o
        errores en la pronunciación/ortografía
      </Callout>
      <Example>
        <H>おばさん</H> <R>obasan</R> [tía] es diferente a <H>おばあさん</H>{" "}
        <R>obāsan</R> [abuela]
      </Example>
      <Example>
        <H>ゆき</H> <R>yuki</R> [nieve] es diferente a <H>ゆうき</H> <R>yūki</R>{" "}
        [valentía]
      </Example>
      <Example>
        <H>え</H> <R>e</R> [pintura] es diferente a <H>ええ</H> <R>ē</R> [sí]
      </Example>
      <Example>
        <H>ここ</H> <R>koko</R> [aquí] es diferente a <H>こうこう</H>{" "}
        <R>kōkō</R> [preparatoria]
      </Example>
      <h3>Vocales largas en katakana</h3>
      <ul>
        <li>
          Se agrega <K>ー</K> sin importar la vocal.
        </li>
      </ul>{" "}
      <Example>
        <K>カレー</K> <R>karē</R> [curry]
      </Example>
      <Example>
        <K>カー</K> <R>kā</R> [car (carro)]
      </Example>
      <h3>Vocales largas en romaji</h3>
      <p>
        Dependiendo del sistema rōmaji que se utilice, puede ser escrito de
        diferentes maneras:
      </p>
      <ul>
        <li>Siguiendo las mismas reglas que en el caso de hiragana</li>
        <li>
          Utilizando el símbolo diacrítico <R>¯</R> (macrón) sobre la vocal que
          se quiera alargar
        </li>
        <li>Una combinación de ambos, guiados por reglas específicas</li>
      </ul>
      <h2>Uso de ん ン n</h2>
      <p>
        Mientras que algunas referencias mencionan que la pronunciación de este
        caracter puede variar dependiendo de los sonidos que le siguen, esta
        diferencia no es lo suficientemente notable para ser respetada como
        principiante, sólo para tenerla en cuenta a la hora de perfeccionar la
        pronunciación para sonar como un nativo .
      </p>
      <p>
        En el rōmaji, estos cambios pueden notarse cuando se transcribe <R>m</R>{" "}
        en lugar de <R>n</R> dependiendo del sistema de romanización.
      </p>
      <Callout>
        A pesar de ser un sonido de una mora de duración, nunca se coloca{" "}
        <H>ん</H> <K>ン</K> <R>n</R> al inicio de una palabra.{" "}
      </Callout>
      <h2>Uso de っ ッ</h2>
      <p>
        La diferencia se encuentra en el tamaño del caracter: en lugar de{" "}
        <H>つ</H> <K>ツ</K>, se utiliza <H>っ</H> <K>ッ</K>.{" "}
        <b>Se escribe en pequeño</b> para hacer una diferencia de pronunciación.
        Su trabajo es alargar el sonido de la consonante que va inmediatamente
        después de éste.
      </p>
      <Callout>Es un sonido que tiene duración de una mora.</Callout>
      <Example>
        <H>きっぷ</H> <R>kippu</R> [boleto]
      </Example>
      <Example>
        <K>ベッド</K> <R>beddo</R> [bed (cama)]
      </Example>
      <p>
        La única excepción es la doble &quot;n&quot; ya que se escribe con{" "}
        <H>ん</H> <R>n</R> + kana de la fila (n), no con <H>っ</H>
        <b>.</b>
      </p>
      <Example>
        <H>さんにん</H> <R>sannin</R> [tres personas]
      </Example>
      <h2>Vocales afónicas</h2>
      <p>
        En algunas palabras, el sonido de vocales como (i) o (u) se pierde, es
        decir, no se pronuncia.
      </p>
      <Example>
        <H>すきです</H> <R>suki desu</R> →{" "}
        <R>
          s<s>u</s>ki des<s>u</s>
        </R>{" "}
        [me gusta]
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
        En cuanto a la escritura/lectura, estas palabras pueden ser
        diferenciadas con su propio kanji: <Kj>雨</Kj> y <Kj>飴</Kj>{" "}
        respectivamente, mientras que en la pronunciación se puede diferenciar
        con el tono.
      </p>
    </div>
  )
}
