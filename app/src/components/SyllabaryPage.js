import React from 'react'
import Table from './Table'
import simple from '../utils/simple.json'
import dakuten from '../utils/dakuten.json'
import combinations from '../utils/combinations.json'

import './styles/Syllabaries.css'

const fonts = [
  'Kosugi Maru',
  'Sawarabi Gothic',
  'Noto Serif JP',
]

export default function SyllabaryPage(){
  const [ currentFont, setCurrentFont ] = React.useState('Noto Serif JP')

  const nextFont = () => {
    fonts.forEach((e, i) => {
      if(e === currentFont) {
        if( i < fonts.length - 1) 
          return setCurrentFont(fonts[i + 1])
          
        return setCurrentFont(fonts[0])
      }
    })
  }

  return(
    <div id='syllabaries'>
      <div 
        id='font' 
        className='noselect'
        onClick={() => setCurrentFont(nextFont)}
      >
        Cambiar Fuente
      </div>
      <h1>Escritura y Pronunciación</h1>
      <h2>Esta página contiene audios para los Caracteres Simples, da click en cada caracter para escuchar.</h2>
      <div id='tables' style={{fontFamily: currentFont}}>
      <Table 
        label={'Caracteres Simples'}
        dataJSON={simple.kana} 
        headersJSON={simple.headers} 
        styleObj={simple.gridStyle}
         />
      <Table 
        label={'Caracteres con Dakuten'}
        dataJSON={dakuten.kana}
        headersJSON={dakuten.headers}
        styleObj={dakuten.gridStyle}
      />
      <Table 
        label={'Caracteres Combinados'}
        dataJSON={combinations.kana}
        headersJSON={combinations.headers}
        styleObj={combinations.gridStyle}
      />
      </div>
    </div>
  )
}