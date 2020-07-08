import React from 'react'
import Table from './Table'
import simple from '../utils/simple.json'
import dakuten from '../utils/dakuten.json'
import combinations from '../utils/combinations.json'

import './styles/SyllabaryPage.css'

export default function SyllabaryPage(){
  return(
    <div id='syllabary-page' className='flex-center column text-center'>
      <h1>Escritura y Pronunciación</h1>
      
      <section id='tables'>
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
      </section>
    </div>
  )
}