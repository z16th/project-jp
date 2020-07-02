import React from 'react'
import kanjiData from '../utils/kanji-1-80.json'
import KanjiCard from './KanjiCard'

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
    </div>
  )
}