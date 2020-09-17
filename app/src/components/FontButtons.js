/**@jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { jsx } from "@emotion/core"
import { fontButtons } from "../styling"

export default function FontButtons({ currentFonts, setCurrentFonts }) {
  const fonts = ["Mk POP", "Asobi Memogaki", "Komorebi Gothic", "Umeboshi"]
  const handleClick = (index) => {
    if (currentFonts.includes(fonts[index])) {
      const newArr = currentFonts.filter((e) => e !== currentFonts[index])
      setCurrentFonts(newArr)
    } else {
      let newArr = [...currentFonts]
      newArr.push(fonts[index])
      setCurrentFonts(newArr)
    }
  }
  return (
    <div className="font-buttons" css={fontButtons}>
      {fonts.map((e, i) => (
        <button
          key={fonts[i]}
          type="button"
          style={{ fontFamily: fonts[i], fontSize: "3rem" }}
          className={currentFonts.includes(fonts[i]) ? "active" : ""}
          onClick={() => handleClick(i)}
        >
          お
        </button>
      ))}
    </div>
  )
}
