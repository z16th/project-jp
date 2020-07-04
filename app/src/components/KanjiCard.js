import React from 'react'
import KanjiAnimation from './KanjiAnimation'

export default function KanjiCard({data}){
  const { utf16, number, strokes, character, meaning} = {...data}
  const [ showAnimation, setShowAnimation ] = React.useState(false)
  const [ displayType, setDisplayType ] = React.useState('Romaji')

  const handleAnimationClick = () => {
    setShowAnimation(state => !state)
  }

  const handleReadingClick = () => {
    displayType === 'Romaji' ? setDisplayType('Kana') : setDisplayType('Romaji')
  }

  return(
    <div className='kanji-card'>
      {showAnimation &&
        <KanjiAnimation name={utf16} />
      }
      <div className='kanji-writing' onClick={handleAnimationClick}>
        <div className='kanji-number'>No: {number}</div>
        <div className='kanji-strokes'>Trazos: {strokes}</div>
        <div className='kanji-char'>{character}</div>
      </div>
      <div className='kanji-reading' onClick={handleReadingClick}>
        <div className='kanji-onyomi'>On'yomi: {data[`onyomi${displayType}`]}</div>
        <div className='kanji-kunyomi'>Kun'yomi: {data[`kunyomi${displayType}`]}</div>
        <div className='kanji-meaning'>Significado: {meaning}</div>
      </div>      
    </div>
  )
}