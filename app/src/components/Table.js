import React from 'react'
import './styles/Table.css'
import Icon from './Icon'
import KanjiAnimation from './KanjiAnimation'

const headers = {
  hiragana: 'Hiragana \nひらがな',
  katakana: 'Katakana \nカタカナ',
  romaji: 'Romaji \nローマ字'
}

export default function Table({dataJSON, headersJSON,styleObj, label}){
  const [ currentSyllabary, setCurrentSyllabary ] = React.useState('hiragana')

  const nextSyllabary = () => {
    if(currentSyllabary === 'hiragana') return setCurrentSyllabary('katakana')
    if(currentSyllabary === 'katakana') return setCurrentSyllabary('romaji')
    if(currentSyllabary === 'romaji') return setCurrentSyllabary('hiragana')
  }

  return(
    <section className='table-section'>
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

      <div className='table' style={{...styleObj}}>
        {dataJSON.map(kana => 
          <div 
            key={kana.romaji}
            className={`kana flex-center ${kana.romaji} ${kana.class}`}
            style={{gridArea: kana.romaji}}
            >
              <KanjiAnimation name={`${kana.utf16katakana}`} />
          </div>
        ) }
        {headersJSON.map(header => (
          <div 
            key={header.coord} 
            className={`${header.char} tab-head flex-center noselect`}
            style={{gridArea: header.coord}}
          >
            {header.char}
          </div>
        ))}
      </div>
    </section>
  )
}