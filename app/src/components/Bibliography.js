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
