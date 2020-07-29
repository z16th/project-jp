import React, { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"
import kanas from "../utils/json/kana-all.json"

const initArray = (from, to) => {
  const arr = []
  for (let i = from; i <= to; i + 1) {
    arr.push(i)
  }
  return arr
}

export default function KanaRow({
  from,
  to,
  state: allActive,
  updater: setAllActive,
  syllabary,
}) {
  const indexes = initArray(from, to)
  const status = useRef("inactive")
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    if (!isActive) {
      setIsActive(true)
      setAllActive(false)
    }
    setIsActive(false)
  }

  useEffect(() => {
    if (isActive) {
      status.current = "active"
    }
    if (!isActive) {
      status.current = "inactive"
    }
  }, [isActive])

  useEffect(() => {
    if (!allActive) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [allActive, setIsActive])

  return (
    <button className={`kana-button ${status.current}`} onClick={handleClick}>
      {indexes.map((i) => (
        <span key={i}>{kanas[i][syllabary]}</span>
      ))}
    </button>
  )
}

KanaRow.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
  condition: PropTypes.bool,
  syllabary: PropTypes.string,
}

KanaRow.defaultProps = {
  syllabary: "hiragana",
}

const charAsFont = (charObj, syllabary) => {
  return <span className="flex-center">{charObj[`${syllabary}`]}</span>
}
