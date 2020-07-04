import React from 'react'
import kanjiData from '../utils/kanji-1-80.json'
import KanjiCard from './KanjiCard'
import './styles/KanjiPage.css'

export default function KanjiPage(){
  return(
    <div id='kanji-page'>
      <h1 className='header'>Una descripción sobre esta página</h1>
      <div id='kanji-table'>
        { 
          kanjiData.map(e => (
            <KanjiCard key={e.utf16} data={e} />
          ))
        }
      </div>
      <p>Los diagramas de trazos están basados en datos proporcionados por <a href='http://kanjivg.tagaini.net/'>KanjiVG</a></p>
      <p>Parte de la información de este sitio está basada en los libros de referencia</p>
      <p>{`Seely, C., Henshall, K. G., & Fan, J. (2016). The Complete Guide to Japanese Kanji: (JLPT All Levels) Remembering and Understanding the 2,136 Standard Characters (First ed.) [E-book]. Tuttle Publishing. https://www.amazon.com/-/es/Complete-Guide-Japanese-Kanji-Understanding-ebook/dp/B01DIF7RBI/`}</p>
    </div>
  )
}