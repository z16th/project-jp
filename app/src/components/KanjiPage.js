import React from 'react'
import kanjiData from '../utils/kanji-1-80.json'
import KanjiCard from './KanjiCard'
import Disclaimer from './Disclaimer'
import './styles/KanjiPage.css'

function KanjiInfo(){
  return(
    <React.Fragment>
      <h1 className='header'>Kanji</h1>
      <h2 id="introduction">Introducción</h2>
      <p>El sistema de escritura Japonés hace uso extenso de los caracteres Chinos, llamados <strong>kanji</strong>. La mayoría de los kanji son ideogramas (símbolos que representan un concepto abstracto, como arriba 上 ), pictogramas (bosquejos del objeto que representan, por ejemplo 木 ) o una combinación de ambos (por ejemplo, 峠 significa paso de montaña, es una combinación de 山 &quot;montaña&quot;, 上 &quot;arriba&quot; y 下 &quot;abajo&quot;).</p>
      <h2 id="radicals-header">Los radicales</h2>
      <p>Los kanji están compuestos de una serie de trazos predefinidos, llamados <strong>radicales.</strong> Ya que casi todos los kanji en realidad son una combinación de dos o más radicales, es útil aprenderlos.</p>
      <h2 id="las-pronunciaciones">Las pronunciaciones</h2>
      <p>Hay dos formas básicas en las que los kanjis pueden ser leídos: la pronuncación <strong>on-yomi</strong> o China, y la pronunciación <strong>kun-yomi</strong> o Japonesa. Antes de que los Japoneses tomaran prestado el sistema de escritura China, no existía un lenguaje escrito en Japón. </p>
      <h1 id="uso">Uso</h1>
      <p>Los kanji pueden aparecer solos, pero es más común que aparezcan en grupos de dos o más kanji, llamados compuestos. Existen 2,136 kanjis de &quot;uso regular&quot; los cuales son combinados para crear las decenas de miles de palabras del idioma Japonés. Gran parte de estos compuestos vienen del Chino. Algunos de ellos, fueron inventados en Japón. Y algunos que son creados en Japón, son adoptados en China. A diferencia del Chino, los kanji Japoneses usualmente tienen más de una pronuncación, la cual depende del contexto en el que se encuentre en una oración</p>
      <h2 id="escritura">Escritura</h2>
      <p>Reglas generales para escribir kanji:</p>
      <ul>
        <li>Los trazos son escritos de izquierda a derecha.</li>
        <li>Los trazos son escritos de arriba hacia abajo.</li>
        <li>Cuando una línea horizontal y una vertical se cruzan, la horizontal se dibuja primero.</li>
        <li>Cuando hay un arreglo de tres trazos izquierda-en medio-derecha y el trazo de en medio es el más largo, se dibuja primero.</li>
        <li>Cuando hay líneas que rodean un caracter, las líneas de fuera son dibujadas primero.</li>
        <li>Cuando el centro de un kanji es rodeado por una caja, el centro es dibujado primero antes de la línea inferior de la caja.</li>
        <li>Líneas que cubren el exterior, sin cubrir la parte superior, son escritas al final.</li>
      </ul>
      <h2 id="tipos-de-kanji">Tipos de Kanji</h2>
      <p> Los kanji japoneses pueden ser divididos en 4 tipos básicos:</p>
      <ul>
        <li>Pictogramas (imágenes de objetos)　山、田、川</li>
        <li>Ideogramas (imágenes de ideas)　三、上、中</li>
        <li>Pictogramas compuestos (varios pictogramas que forman uno solo)　森、町、物</li>
        <li>Ideogramas de sonido (una combinación de caracteres usados por su sonido y otros caracteres usados por su significado)　英、語、曜</li>
      </ul>
      <p>Aproximadamente el 90% de los kanjis son ideogramas de sonido compuestos.</p>
    </React.Fragment>
  )
}

function Bibliography(){
  return(
    <React.Fragment>
      <div>Los diagramas de trazos están basados en datos proporcionados por <a href='http://kanjivg.tagaini.net/'>KanjiVG</a></div>
      <div>
        Parte de la información de este sitio se puede consultar en los libros de referencia
        </div>
        <ul>
          <li>"Seely, C., Henshall, K. G., & Fan, J. (2016). <em>The Complete Guide to Japanese Kanji: (JLPT All Levels) Remembering and Understanding the 2,136 Standard Characters </em> (First ed.)  [E-book]. Tuttle Publishing. https://www.amazon.com/-/es/Complete-Guide-Japanese-Kanji-Understanding-ebook/dp/B01DIF7RBI/"</li>

      <li>"Stout, T. G., &amp; Hakone, K. (2017). <em>Japanese Kanji for Beginners: First Steps to Learn the Basic Japanese Characters. </em> Tuttle Publishing.</li>
        </ul>
    </React.Fragment>
  )
}

function HowToUse(){
  return(
    <React.Fragment>
      <h1>Cómo usar esta página</h1>
      <KanjiCard data={kanjiData[17]} />
    </React.Fragment>
  )
}

export default function KanjiPage(){
  return(
    <div id='kanji-page'>
      <KanjiInfo />
      <HowToUse />
      <h1 className='description'>Kanji de Primer Grado</h1>
      <h2>1 - 80</h2>
      <p>Estos son los kanji que aprenden los Japoneses en primer grado</p>
      <div id='kanji-table'>
        { 
          kanjiData.map(e => (
            <KanjiCard key={e.utf16} data={e} />
          ))
        }
      </div>
      <Bibliography />
    </div>
  )
}