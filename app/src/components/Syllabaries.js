import React from 'react'
import Table from './Table'
import kanaSimple from '../utils/kana-simple.json'
import headersSimple from '../utils/headers-simple.json'
import kanaDakuten from '../utils/kana-dakuten.json'
import headersDakuten from '../utils/headers-dakuten.json'
import kanaCombinations from '../utils/kana-combinations.json'
import headersCombinations from '../utils/headers-combinations.json'
import './styles/Syllabaries.css'

const simpleGrid = {
  gridTemplateColumns: `repeat(6, 100px)`,
  gridTemplateRows: `repeat(12, 100px)`,
  gridTemplateAreas:
  `
  '. xa xi xu xe xo'
  'y- a i u e o'
  'yk ka ki ku ke ko'
  'ys sa shi su se so'
  'yt ta chi tsu te to'
  'yn na ni nu ne no'
  'yh ha hi fu he ho'
  'ym ma mi mu me mo'
  'yy ya . yu . yo'
  'yr ra ri ru re ro'
  'yw wa . . . wo'
  'ynn n . . . .'
  `
}

const dakutenGrid = {
  gridTemplateColumns: `repeat(6, 100px)`,
  gridTemplateRows: `repeat(6, 100px)`,
  gridTemplateAreas:
  `
  '. xa xi xu xe xo'
  'yg ga gi gu ge go'
  'yz za ji zu ze zo'
  'yd da dzi dzu de do'
  'yb ba bi bu be bo'
  'yp pa pi pu pe po'
  `
}

const combinationsGrid = {
  gridTemplateColumns: `repeat(4, 100px)`,
  gridTemplateRows: `repeat(14, 100px)`,
  gridTemplateAreas:
  `
  '. xや xゆ xよ'
  'yk kya kyu kyo'
  'ysh sha shu sho'
  'ych cha chu cho'
  'yn nya nyu nyo'
  'yh hya hyu hyo'
  'ym mya myu myo'
  'yr rya ryu ryo'
  '. . . .'
  'yg gya gyu gyo'
  'yj ja ju jo'
  'yd dya dyu dyo'
  'yb bya byu byo'
  'yp pya pyu pyo'
  `
}

const fonts = [
  'Kosugi Maru',
  'Sawarabi Gothic',
  'Noto Serif JP',
]

export default function Syllabaries(){
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
        dataJSON={kanaSimple} 
        headersJSON={headersSimple} 
        styleObj={simpleGrid}
         />
      <Table 
        label={'Caracteres con Dakuten'}
        dataJSON={kanaDakuten}
        headersJSON={headersDakuten}
        styleObj={dakutenGrid}
      />
      <Table 
        label={'Caracteres Combinados'}
        dataJSON={kanaCombinations}
        headersJSON={headersCombinations}
        styleObj={combinationsGrid}
      />
      </div>
    </div>
  )
}