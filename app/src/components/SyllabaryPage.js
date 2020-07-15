import React, { useState } from 'react'
import { Route, Link, useRouteMatch } from 'react-router-dom'
import Table from './Table'

export default function SyllabaryPage(){
  const { path, url } = useRouteMatch()
  const [ type, setType ] = useState('simple')
  return(
    <div id='syllabary-page' className='flex-center column text-center'>
      <nav>
        <Link to={`${path}/hiragana`}>Hiragana</Link>
        <Link to={`${path}/katakana`}>Katakana</Link>
        <Link to={`${path}/romaji`}>Romaji</Link>
      </nav>
      <Route path={`${url}/hiragana`}>
        <Table syllabary='hiragana' type={type} setType={setType} />
      </Route>
      <Route path={`${url}/katakana`}>
        <Table syllabary='katakana' type={type} setType={setType} />
      </Route>
      <Route path={`${url}/romaji`}>
        <Table syllabary='romaji' type={type} setType={setType} />
      </Route>
    </div>
  )
}