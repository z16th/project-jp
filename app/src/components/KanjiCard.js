import React from 'react'
import KanjiAnimation from './KanjiAnimation'
import './styles/KanjiCard.css'

export default function KanjiCard({data}){
  const { character, utf16, number, strokes, meaning} = {...data}
  const [ showAnimation, setShowAnimation ] = React.useState(false)
  const [ displayType, setDisplayType ] = React.useState('Kana')

  const handleAnimationClick = () => {
    setShowAnimation(state => !state)
  }

  const handleReadingClick = () => {
    displayType === 'Romaji' ? setDisplayType('Kana') : setDisplayType('Romaji')
  }

  return(
    <div className='kanji-card noselect'>

      <div className='kanji-left'>
        {!showAnimation &&
          <div className='kanji-char'>{character}</div>
        }
        {showAnimation &&
          <KanjiAnimation name={utf16} width={120} height={120} />
        }
        <div className='kanji-strokes'  onClick={handleAnimationClick}><b>Trazos:</b> {strokes}</div>
        <div className='kanji-number'><b>No:</b> {number}</div>
      </div>

      <div className='kanji-right'>
        <div className='kanji-reading' onClick={handleReadingClick}>
          <div className='kanji-onyomi'><b>On-yomi:</b> {data[`onyomi${displayType}`]}</div>
          <div className='kanji-kunyomi'><b>Kun-yomi:</b> {data[`kunyomi${displayType}`]}</div>
        </div>
        <br></br>
        <div className='kanji-meaning'><b>Significado:</b> {meaning}</div>
      </div>

    </div>
  )
}