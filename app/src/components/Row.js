import React, { useState, useEffect } from "react"

export default function Row({ index, syllabary, rows, updateRows }) {
  const [state, setState] = useState(rows[index].checked)
  useEffect(() => {
    setState(rows[index].checked)
  }, [index, rows])
  return (
    <button
      key={index}
      type="button"
      onClick={() => updateRows([index], !rows[index].checked)}
      className={`row ${syllabary} ${state ? "selected" : ""}`}
    >
      {rows[index].kanas.map((item, i) => (
        <h3 key={i} className="char">
          {item}
        </h3>
      ))}
    </button>
  )
}
