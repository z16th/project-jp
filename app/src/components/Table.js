import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import KanjiAnimation from './KanjiAnimation'
import kanas from '../utils/kana-all.json'
import grids from '../utils/grids-all.json'
import './styles/Table.css'

export default function Table({syllabary, type, setType}){
  const [ renderAnimations, setRenderAnimations ] = useState(false)
  const [ romajiStyle, setRomajiStyle ] = useState('')

  useEffect(() => {
    if(syllabary === 'romaji'){
      setRomajiStyle('romaji-style')
    }
  }, [syllabary]);

  const handleAnimButton = () => {
    setRenderAnimations(state => !state)
  }
  
  const handleNextButton = () => {
    if(type === 'simple') return setType('dakuten')
    if(type === 'dakuten') return setType('combination')
    if(type === 'combination') return setType('simple')
  }

  const handlePrevButton = () => {
    if(type === 'simple') return setType('combination')
    if(type === 'combination') return setType('dakuten')
    if(type === 'dakuten') return setType('simple')
  }

  const CharAsFont = ({ charObj }) =>{
    return(
      <span className='flex-center'>
        {charObj[`${syllabary}`]}
      </span>
    )
  }

  const CharAsAnim = ({ charObj }) => {
    if(syllabary !== 'romaji')
    return(
      charObj.utf16[`${syllabary}`].map((utf16) => (
        <KanjiAnimation key={utf16} name={utf16}/>
      ))
    )
  }

  const RenderTableChars = ({ charObj }) => {
    if(syllabary === 'romaji'){
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
        {renderAnimations 
          ? <CharAsAnim charObj={charObj} /> 
          : <CharAsFont charObj={charObj} />}
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

  const RenderAnimButton = () => {
    if(syllabary === 'romaji') return null
    return (
    <h4 
      className='description button noselect' 
      onClick={handleAnimButton}
    >
      {!renderAnimations ? 'Ver animaciones' : 'Ver caracteres'}
    </h4>
    )
  }

  return(
    <section className='table-section'>
      <div className='flex-center noselect'>
        <span className='description' onClick={handlePrevButton}>{'<'}</span>
        <p className='noselect'>
          {type}
        </p>
        <span className='description' onClick={handleNextButton}>{'>'}</span>
      </div>
      <RenderAnimButton />
      <section 
        className={`table flex-center ${romajiStyle}`} 
        style={grids[`${type}`].gridStyle}
      >
        <RenderTableHeaders headersArray={grids[`${type}`].headers} />
        {kanas
          .filter(kana => kana.type === type)
          .map((kana) => 
            <RenderTableChars key={kana.romaji} charObj={kana} />
        )}
      </section>
    </section>
  )
}

Table.propTypes = {
  syllabary: PropTypes.string.isRequired,
  type: PropTypes.string,
  setType: PropTypes.func.isRequired
}

Table.defaultProps = {
  syllabary: 'hiragana',
  type: 'simple',
}