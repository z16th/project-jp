import React from 'react'
import './styles/LolzSocial.css'

export default function LolzSocial(){
  return (
    <div id='lolz-social'>
      <a id='facebook' className='network' href='https://www.facebook.com/XVI.LoLz'>
        <i className="fab fa-facebook" />
        <span className='text'>Facebook</span>
      </a>
      <a id='twitter' className='network' href='https://twitter.com/XVI_LoLz'>
        <i className="fab fa-twitter" />
        <span className='text'>Twitter</span>
      </a>
      <a id='github' className='network' href='https://github.com/XVI-LoLz'>
        <i className="fab fa-github-alt" />
        <span className='text'>GitHub</span>
      </a>
    </div>
  )
}