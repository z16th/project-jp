import React from 'react'

export default function KanjiCard({data}){
  const { number, strokes, character, onyomi, kunyomi, meaning, utf16 } = {...data}
  return(
    <div className='kanji-card'>
      <img 
        className='svg'
        src={`https://dummyimage.com/200/5155c2/000000.png&text=${utf16}`} 
        alt={`Kanji number ${number}`}
      />
      <div className='kanji-number'>No: {number}</div>
      <div className='kanji-strokes'>Trazos: {strokes}</div>
      <div className='kanji-char'>{character}</div>
      <div className='kanji-onyomi'>On'yomi: {onyomi}</div>
      <div className='kanji-kunyomi'>Kun'yomi: {kunyomi}</div>
      <div className='kanji-meaning'>Significado: {meaning}</div>
    </div>
  )
}