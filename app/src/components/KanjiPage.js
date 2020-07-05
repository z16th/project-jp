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
      <p className='p'>El sistema de escritura Japonés hace uso extenso de los caracteres Chinos, llamados <strong>kanji</strong>. La mayoría de los kanji son ideogramas (símbolos que representan un concepto abstracto, como "arriba" 上 ), pictogramas (bosquejos del objeto que representan, por ejemplo "árbol" 木 ) o una combinación de ambos (por ejemplo, 峠 que significa paso de montaña y es una combinación de 山 "montaña", 上 "arriba" y 下 "abajo").</p>
      <h2 id="radicals-header">Los radicales</h2>
      <p className='p'>Los kanji están compuestos de una serie de trazos predefinidos, llamados <strong>radicales.</strong> Ya que casi todos los kanji son una combinación de dos o más radicales, es útil aprenderlos.</p>
      <h2 id="las-pronunciaciones">Las pronunciaciones</h2>
      <p className='p'>Hay dos formas básicas en las que los kanjis pueden ser leídos: la pronuncación <strong>on-yomi</strong> o China, y la pronunciación <strong>kun-yomi</strong> o Japonesa. Antes de que los Japoneses tomaran prestado el sistema de escritura China, no existía un lenguaje escrito en Japón. </p>
      <h1 id="uso">Uso</h1>
      <p className='p'>Los kanji pueden aparecer solos, pero es más común que aparezcan en grupos de dos o más kanji, o junto a terminaciones en hiragana. Existen 2,136 kanjis de "uso regular" los cuales son combinados para crear las decenas de miles de palabras del idioma Japonés. Gran parte de estos caracteres provienen del Chino. Algunos de ellos fueron inventados en Japón, y adoptados en China. A diferencia del Chino, los kanji Japoneses usualmente tienen más de una pronuncación, la cual depende del contexto en el que se encuentren.</p>
      <h2 id="escritura">Escritura</h2>
      <h4>Reglas generales para escribir kanji:</h4>
      <div className='p'>
        <ul>
          <li>Los trazos son escritos de izquierda a derecha.</li>
          <li>Los trazos son escritos de arriba hacia abajo.</li>
          <li>Cuando una línea horizontal y una vertical se cruzan, la horizontal se dibuja primero.</li>
          <li>Cuando hay un arreglo de tres trazos izquierda-en medio-derecha y el trazo de en medio es el más largo, se dibuja primero.</li>
          <li>Cuando hay líneas que rodean un caracter, las líneas de fuera son dibujadas primero.</li>
          <li>Cuando el centro de un kanji es rodeado por una caja, el centro es dibujado primero antes de la línea inferior de la caja.</li>
          <li>Líneas que cubren el exterior, sin cubrir la parte superior, son escritas al final.</li>
        </ul>
      </div>
      <h2 id="tipos-de-kanji">Tipos de Kanji</h2>
      <h4> Los kanji japoneses pueden ser divididos en 4 tipos básicos:</h4>
      <div className='p'>
        <ul>
          <li>Pictogramas (imágenes de objetos)　山、田、川</li>
          <li>Ideogramas (imágenes de ideas)　三、上、中</li>
          <li>Pictogramas compuestos (varios pictogramas que forman uno solo)　森、町、物</li>
          <li>Ideogramas de sonido (una combinación de caracteres usados por su sonido y otros caracteres usados por su significado)　英、語、曜</li>
        </ul>
        <p>Aproximadamente el 90% de los kanjis son ideogramas de sonido compuestos.</p>
      </div>
    </React.Fragment>
  )
}

function Bibliography(){
  return(
    <div id='bibliography' className='flex-center column'>
      <div>Las animaciones de trazado están basadas en datos proporcionados por <a href='http://kanjivg.tagaini.net/'>KanjiVG</a>.</div>
      <br></br>
      <div>
        Parte de la información de este sitio se puede consultar en los libros de referencia:
        </div>
        <ul>
          <li>Seely, C., Henshall, K. G., & Fan, J. (2016). <a href='https://www.amazon.com/-/es/Complete-Guide-Japanese-Kanji-Understanding-ebook/dp/B01DIF7RBI/'><em>The Complete Guide to Japanese Kanji: (JLPT All Levels) Remembering and Understanding the 2,136 Standard Characters </em></a> (First ed.) [E-book]. Tuttle Publishing.</li>

      <li>Stout, T. G., &amp; Hakone, K. (2017). <a href='https://www.amazon.com/-/es/Japanese-Kanji-Beginners-Levels-Characters/dp/4805310499'><em>Japanese Kanji for Beginners: First Steps to Learn the Basic Japanese Characters.</em></a> Tuttle Publishing.</li>
        </ul>
    </div>
  )
}

function HowToUse(){
  const example = kanjiData[19]
  return(
    <React.Fragment>
      <h1>Cómo usar esta página</h1>
      <div className='p'>
        <p>En esta sección encontrarás diferentes grupos de cartas divididas por grados, correspondientes al orden en que se enseñan en las escuelas de Japón. Cada tarjeta contiene información sobre un kanji específico.</p>
        <p>Del lado izquierdo se encuentra el <b>caracter</b>, el número de <b>trazos</b> que se necesitan para escribirlo y el <b>número</b> según el orden encontrado en el libro The Complete Guide To Japanese Kanji. <u>Al dar click en <b>Trazos</b> cambiará la visualización del caracter</u>. Aparecerán nuevos botones, con los que podrás reproducir, pausar y reiniciar la animación del orden de los trazos.</p>
        <p>Del lado derecho se encuentran las pronunciaciones <b>on-yomi</b> (China) y <b>kun-yomi</b> (Japonesa) así como los posibles <b>significados</b>. <u>Al dar click en las <b>pronunciaciones</b> cambiará su visualización</u>, de kana a rōmaji y vice versa.</p>
        <p><b>Nota: </b>En el estudio de los kanji usualmente se hace uso del katakana o del rōmaji en mayúsculas para indicar la pronunciación on-yomi. Mientras que el hiragana o el rōmaji en minúsculas se usa para indicar la pronuncación kun-yomi. Esta página hace uso de ese formato. Es posible que otras fuentes manejen un formato distinto.</p>
        <p>Las pronunciaciones pueden contener signos como ".", "/" y "～" para indicar algunos detalles de este diccionario de kanji. El punto (.) indica que la pronunciación del kanji termina en ese lugar y las sílabas siguentes corresponden a la formación de una palabra completa. En el ejemplo de abajo, み.る (mi.ru) indica que み (mi) es la pronunciación del kanji, y que みる (miru) es una palabra completa. Sustituyendo queda 見る (miru). La diagonal (/) indica que se puede utilizar la misma pronunciación del kanji para generar otras palabras. En el ejemplo: {example.kunyomiKana} ({example.kunyomiRomaji}) se divide en tres palabras: la ya mencionada, み.せる (mi.seru) y み.える (mi.eru). Las últimas dos pasan a ser 見せる (miseru) y 見える (mieru) respectivamente.</p>
        <p><b>Nota: </b>Estos signos pueden ser encontrados en algunos diccionarios para dividir entre los kanjis y el vocabulario en el que son usados, al igual que en esta página. Es posible que otras fuentes utilicen un formato distinto.</p>
      </div>
      <KanjiCard data={example} />
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