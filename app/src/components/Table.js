import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './styles/Table.css'
import KanjiAnimation from './KanjiAnimation'

const headers = {
  hiragana: 'Hiragana \nひらがな',
  katakana: 'Katakana \nカタカナ',
  romaji: 'Romaji \nローマ字'
}

export default function Table({dataArr, headersArr,styleObj, label}){
  const [ currentSyllabary, setCurrentSyllabary ] = useState('hiragana')
  const [ renderAnimations, setRenderAnimations ] = useState(false)

  const nextSyllabary = () => {
    if(currentSyllabary === 'hiragana') return setCurrentSyllabary('katakana')
    if(currentSyllabary === 'katakana') return setCurrentSyllabary('romaji')
    if(currentSyllabary === 'romaji') return setCurrentSyllabary('hiragana')
  }

  const CharAsFont = ({ charObj }) =>{
    return(
      <span className='flex-center'>
        {charObj[`${currentSyllabary}`]}
      </span>
    )
  }

  const CharAsAnim = ({ charObj }) => {
    return(
      <KanjiAnimation name={charObj[`utf16${currentSyllabary}`]}/>
    )
  }

  const RenderTableChars = ({ charObj }) => {
    if(currentSyllabary === 'romaji'){
      return(
        <div 
        key={charObj.romaji}
        className={`kana flex-center ${charObj.romaji} ${charObj.class}`}
        style={{gridArea: charObj.romaji}}
        >
          <CharAsFont charObj={charObj} />
      </div>
      )
    }
    return(
      <div 
      key={charObj.romaji}
      className={`kana flex-center ${charObj.romaji} ${charObj.class}`}
      style={{gridArea: charObj.romaji}}
      >
        {renderAnimations ? <CharAsAnim charObj={charObj} /> : <CharAsFont charObj={charObj} />
        }
    </div>
    )
  }

  const RenderTableHeaders = ({headersArray}) => {
    return(
      <React.Fragment>
        {headersArray.map(({ char, coord }) => (
          <div 
            key={coord} 
            className={`${char} tab-head flex-center noselect`}
            style={{gridArea: coord}}
          >
            {char}
          </div>
        ))}
      </React.Fragment>
    )
  }

  const AnimationsButton = () => {
    if(currentSyllabary === 'romaji') return null
    return(
      <h3
        className='button description noselect'
        onClick={() => setRenderAnimations(state => !state)}
      >
        {!renderAnimations ? 'Ver Animaciones' : 'Volver a Caracteres'}
      </h3>
    )
  }

  return(
    <section className='table-section'>
      <h2 className='header'>
        {currentSyllabary && label}
      </h2>
      <h3 
        className='description noselect'
        onClick={nextSyllabary}
      >
        {headers[currentSyllabary]}
        {!currentSyllabary && 'Error'}
      </h3>
      <AnimationsButton />
      <section className='table flex-center' style={{...styleObj}}>
        <RenderTableHeaders headersArray={headersArr} />
        {dataArr.map((kana) => 
          <RenderTableChars charObj={kana} />
        )}
      </section>
    </section>
  )
}

Table.propTypes = {
  label: PropTypes.string,
  dataArr: PropTypes.array.isRequired,
  headersArr: PropTypes.array.isRequired,
  styleObj: PropTypes.object.isRequired
}

Table.defaultProps = {
  label: 'Set your label here'
}