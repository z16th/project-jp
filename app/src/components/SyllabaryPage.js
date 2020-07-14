import React from 'react'
import { Route, Link, useRouteMatch } from 'react-router-dom'
import Table from './Table'
import simple from '../utils/simple-anim.json'
import dakuten from '../utils/dakuten-anim.json'
import combinations from '../utils/combinations.json'

export default function SyllabaryPage(){
  const { path, url } = useRouteMatch()
  return(
    <div id='syllabary-page' className='flex-center column text-center'>
      <h1>Escritura</h1>
      <Route path={`${url}/simple`}>
        <Table 
          label={simple.label['es']}
          dataArr={simple.kana} 
          headersArr={simple.headers} 
          styleObj={simple.gridStyle}
        />
      </Route>
      <Route path={`${url}/dakuten`}>
        <Table 
          label={dakuten.label['es']}
          dataArr={dakuten.kana}
          headersArr={dakuten.headers}
          styleObj={dakuten.gridStyle}
        />
      </Route>
        {/* <Table 
          label={'Caracteres Combinados'}
          dataJSON={combinations.kana}
          headersJSON={combinations.headers}
          styleObj={combinations.gridStyle}
        /> */}
    </div>
  )
}