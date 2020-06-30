import React from 'react'
import './styles/Table.css'

const headers = {
  hiragana: 'Hiragana \nひらがな',
  katakana: 'Katakana \nカタカナ',
  romaji: 'Romaji \nローマ字'
}

const PlayAudioFromID = (audioId) => {
  let audio = new Audio(`https://z16th-bucket.s3-us-west-1.amazonaws.com/project-jp/audios/${audioId}.mp3`)
  if(audio) return audio.play()
  console.log('NO AUDIO')
}

export default function Table({dataJSON, headersJSON,styleObj, label}){
  const [ currentSyllabary, setCurrentSyllabary ] = React.useState('hiragana')
  const kanas = {...dataJSON}

  const nextSyllabary = () => {
    if(currentSyllabary === 'hiragana') return setCurrentSyllabary('katakana')
    if(currentSyllabary === 'katakana') return setCurrentSyllabary('romaji')
    if(currentSyllabary === 'romaji') return setCurrentSyllabary('hiragana')
  }
  return(
    <React.Fragment>
      <h1 className='header'>
        {currentSyllabary && label}
      </h1>
      <h2 
        className='description noselect'
        onClick={nextSyllabary}
      >
        {headers[currentSyllabary]}
        {!currentSyllabary && 'Error'}
      </h2>

      <div className='table' style={styleObj}>
        {Object.keys(kanas).map(kana => 
          <div 
            key={kanas[kana].romaji}
            className={`kana flex-center ${kanas[kana].romaji}`}
            style={{gridArea: kanas[kana].romaji}}
            onClick={() => PlayAudioFromID(kanas[kana].romaji)}
            >
              {kanas[kana][currentSyllabary]}
          </div>
        ) }
        {headersJSON.map(e => (
          <div 
            key={e.class} 
            className={`${e.class} tab-head flex-center`}
            style={{gridArea: e.class}}
          >
            {e.value}
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}