import React from "react"
import PropTypes from "prop-types"

const sources = {
  romanization: (
    <>
      <a href="https://es.wikipedia.org/wiki/Romanizaci%C3%B3n_Hepburn#Hepburn_original_y_modificado">
        Romanización Hepburn Modificada
      </a>
    </>
  ),
  kanjiVG: (
    <>
      Las animaciones de trazado están basadas en datos proporcionados por{" "}
      <a href="http://kanjivg.tagaini.net/">KanjiVG</a>.
    </>
  ),
  minnaNoNihongo: (
    <>
      3A Corporation. (2012).{" "}
      <a href="https://www.amazon.com/dp/4883196046">Minna No Nihongo</a>{" "}
      (Second ed.). 3A Corporation.
    </>
  ),
  genki: (
    <>
      Banno, E., Ikeda, Y., & Ohno, Y. (2011).{" "}
      <a href="https://www.amazon.com/-/es/GENKI-Integrated-Elementary-Japanese-English/dp/4789014401">
        GENKI I: An Integrated Course in Elementary Japanese (English and
        Japanese Edition)
      </a>{" "}
      (2nd edition ed.). Japan Times/Tsai Fong Books.
    </>
  ),
  randomHouseDictionary: (
    <>
      Nakao, S. (1996).{" "}
      <a href="https://www.amazon.com/exec/obidos/ASIN/034540548X/">
        <em>
          Random House Japanese-English English-Japanese Dictionary (Up-To-Date
          ed.)
        </em>
      </a>
      . Ballantine Books.
    </>
  ),
  practicalKanji: (
    <>
      Association for Japanese-Language Teaching (AJALT). (2016).{" "}
      <a href="https://www.amazon.com/PRACTICAL-KANJI-Introductory-Textbook-Japanese/dp/4872179757">
        <em>
          PRACTICAL KANJI: An Introductory Kanji Textbook for Japanese Language
          Learners, Vol.1 w/ MP3 CD
        </em>
      </a>
      . Ask Publishing Co.,Ltd.
    </>
  ),
  guideToJapaneseKanji: (
    <>
      Seely, C., Henshall, K. G., & Fan, J. (2016).{" "}
      <a href="https://www.amazon.com/-/es/Complete-Guide-Japanese-Kanji-Understanding-ebook/dp/B01DIF7RBI/">
        <em>
          The Complete Guide to Japanese Kanji: (JLPT All Levels) Remembering
          and Understanding the 2,136 Standard Characters
        </em>
      </a>{" "}
      (First ed.) [E-book]. Tuttle Publishing.
    </>
  ),
  kanjiForBeginners: (
    <>
      Stout, T. G., &amp; Hakone, K. (2017).{" "}
      <a href="https://www.amazon.com/-/es/Japanese-Kanji-Beginners-Levels-Characters/dp/4805310499">
        <em>
          Japanese Kanji for Beginners: First Steps to Learn the Basic Japanese
          Characters
        </em>
      </a>
      . Tuttle Publishing.
    </>
  ),
}

export default function CiteSource({ source }) {
  return <span className="bibliography">{sources[`${source}`]}</span>
}

CiteSource.propTypes = {
  source: PropTypes.string.isRequired,
}
