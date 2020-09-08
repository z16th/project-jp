import { css } from "@emotion/core"
import { pink, yellow, blue, gray, brands, green } from "./colors"
import { kanjiSansFont, kanjiSerifFont, typeScale } from "./typography"
import texture from "../utils/images/paper.jpg"

export const sizes = {
  navBar: {
    height: "50px",
  },
}

const minWidth = 280
const maxWidth = 800

// =============================================GAME
export const menuStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const menuButtons = css`
  width: 100%;
  @media (max-width: 400px) {
    font-size: 9px;
    .syllabary-buttons {
      button {
        font-size: 1.2rem;
      }
    }
  }
  .syllabary-buttons {
    font-size: 2rem;
    margin: 20px 0;
    .hiragana {
      width: 50%;
      height: 64px;
      border-radius: 12px 0 0 12px;
      &.active {
        background-color: ${yellow.regular};
      }
      &:hover:not(.active) {
        background-color: ${yellow.dark};
      }
    }
    .katakana {
      width: 50%;
      height: 64px;
      border-radius: 0 12px 12px 0;
      &.active {
        background-color: ${blue.regular};
      }
      &:hover:not(.active) {
        background-color: ${blue.dark};
      }
    }
  }
  .type-buttons {
    margin: 20px 0;
    .type-button {
      width: 25%;
      &.basic {
        border-radius: 6px 0 0 6px;
      }
      &.extended {
        border-radius: 0 6px 6px 0;
      }
      &.active {
        background-color: ${gray.regular};
        &:hover {
          background-color: ${gray.regular};
        }
      }
    }
  }
  .action-buttons {
    display: flex;
    justify-content: space-between;
    .select-all {
      border-radius: 6px;
    }
    .start {
      font-size: 1.2rem;
      border-radius: 6px;
      &:not(:disabled) {
        background-color: ${green.dark};
        &:hover {
          color: black;
          text-shadow: none;
          background-color: ${green.regular};
        }
      }
    }
  }
`

export const menuRows = css`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  button:focus {
    outline: none;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 96px;
    width: fit-content;
    margin: 6px 8px;
    border: 2px dashed ${gray.regular};
    border-radius: 16px;
    &:hover {
      .char {
        background-color: ${gray.regular};
      }
    }
    &:focus {
      .char {
        color: white;
        text-shadow: 1px 1px 0px black, 0px 0px 2px black;
        background-color: ${gray.regular};
      }
    }
    &.selected {
      border-style: solid;
    }
    &.hiragana {
      &:hover {
        background-color: ${yellow.background};
      }
      &:focus {
        background-color: ${yellow.background};
      }
      &.selected {
        background-color: ${yellow.regular};
        &:hover {
          background-color: ${yellow.regular};
        }
      }
    }
    &.katakana {
      &:hover {
        background-color: ${blue.background};
      }
      &:focus {
        background-color: ${blue.background};
      }
      &.selected {
        background-color: ${blue.regular};
        &:hover {
          background-color: ${blue.regular};
        }
      }
    }
  }
  .char {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    padding: 16px;
    margin: 16px 8px;
    background-color: white;
    @media (max-width: 400px) {
      padding: 8px;
      margin: 4px 2px;
    }
  }
`

export const game = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4vh;
  .total {
  }
  .kana {
    font-size: 100px;
    margin: 20px;
  }
  .score {
  }
  .back {
  }
  form {
    margin: 20px;
    input {
      font-size: 2rem;
      padding: 16px;
      border: none;
      background-color: ${gray.background};
      &:focus {
        outline: none;
        border-radius: 16px 0 0 16px;
        border: 2px solid ${gray.dark};
      }
      &[type="text"] {
        border-radius: 16px 0 0 16px;
        width: 90px;
      }
      &[type="submit"] {
        background-color: ${green.regular};
        border-radius: 0 16px 16px 0;
      }
    }
  }
`

// =============================================RADICALS

export const radical = css`
  > .left {
  }
  > .right {
  }
`

// =============================================TABLES
export const toggleTables = css`
  .buttons {
    width: fit-content;
    margin: 8px 0;
  }
  button {
    padding: 8px;
    color: black;
    text-align: center;
    text-decoration: none;
    border: none;
    &:hover:enabled {
      cursor: pointer;
      color: white;
      background-color: ${gray.dark};
      text-shadow: 1px 1px 0px black, 0px 0px 2px black;
    }
    &:active {
      color: white;
      background-color: ${gray.regular};
      text-shadow: 1px 1px 0px black, 0px 0px 2px black;
    }
    &:disabled {
      color: white;
      background-color: ${gray.light};
      text-shadow: 1px 1px 0px black, 0px 0px 2px black;
    }
  }
  .active {
    color: white;
    background-color: ${gray.regular};
    text-shadow: 1px 1px 0px black, 0px 0px 2px black;
    &:hover {
      background-color: ${gray.regular};
    }
  }
`

// =============================================ANIMATIONS

export const charAnimation = css`
  button {
    background-color: transparent;
    border-radius: 4px;
    border: none;
    padding: 0;
    margin: 0;
    &:hover {
      cursor: pointer;
    }
  }
  svg {
    padding: 0;
    margin: 0;
    width: 100px;
    height: 100px;
    @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
      width: calc(
        60px + (120 - 60) *
          ((120vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
      );
      height: calc(
        60px + (120 - 60) *
          ((120vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
      );
    }
    @media (min-width: ${maxWidth}px) {
      width: 100px;
      height: 100px;
    }
  }
`

// =============================CUSTOM LINK
export const linkUnactive = css`
  text-decoration: none;
  font-size: ${typeScale.header5}px;
  color: white;
  &:hover {
  }
`

export const linkActive = css`
  font-size: ${typeScale.header4}px;
  font-weight: bold;
  border-bottom: 2px dashed white;
`

// ============================ Word Of The Day

export const wotd = css`
  display: block;
  max-width: 600px;
  padding: 32px;
  margin: 20px 0;
  border-radius: 16px;
  background-color: ${gray.background};
  background-image: url(${texture});
  background-size: 100px;
  box-shadow: 4px 4px 4px ${gray.light};
  .word {
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
    .jp-char {
      flex-direction: column;
      align-items: center;
      .furigana {
        text-shadow: none;
        border-bottom: 2px solid ${gray.light};
      }
      .char {
        &:hover {
          font-family: ${kanjiSerifFont};
        }
      }
      .hiragana {
        color: ${yellow.regular};
        text-shadow: 1px 1px 2px ${yellow.dark};
      }
      .katakana {
        color: ${blue.regular};
        text-shadow: 1px 1px 2px ${blue.dark};
      }
      .kanji {
        color: ${pink.regular};
        text-shadow: 1px 1px 2px ${pink.dark};
      }
    }
  }
  .romaji {
    font-family: ${kanjiSansFont};
    font-size: ${typeScale.header3}px;
    @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
      font-size: calc(
        18px + (${typeScale.header3} - 18) *
          ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
      );
    }
    @media (min-width: ${maxWidth}px) {
      font-size: ${typeScale.header3}px;
    }
  }
  .type {
    margin: 12px 0px;
    font-size: ${typeScale.header5}px;
    @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
      font-size: calc(
        10px + (${typeScale.header5} - 10) *
          ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
      );
    }
    @media (min-width: ${maxWidth}px) {
      font-size: ${typeScale.header5}px;
    }
  }
  .meaning {
    font-family: ${kanjiSansFont};
    font-size: ${typeScale.header3}px;
    @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
      font-size: calc(
        18px + (${typeScale.header3} - 18) *
          ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
      );
    }
    @media (min-width: ${maxWidth}px) {
      font-size: ${typeScale.header3}px;
    }
  }
`

export const japaneseChar = css`
  display: flex;
  justify-content: flex-end;
  margin: 0px;
  .furigana {
    text-align: center;
    font-family: ${kanjiSansFont};
    font-size: ${typeScale.header3}px;
    @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
      font-size: calc(
        18px + (${typeScale.header3} - 18) *
          ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
      );
    }
    @media (min-width: ${maxWidth}px) {
      font-size: ${typeScale.header3}px;
    }
  }
  .char {
    font-family: ${kanjiSansFont};
    font-size: ${typeScale.big}px;
    @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
      font-size: calc(
        50px + (${typeScale.big} - 50) *
          ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
      );
    }
    @media (min-width: ${maxWidth}px) {
      font-size: ${typeScale.big}px;
    }
  }
`

// ===========================SIDEBAR

export const pageNav = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 40px 20px;
  width: 240px;
  .children {
    display: flex;
    flex-direction: column;
    a {
      padding: 8px;
      margin: 4px 0px;
      color: black;
      text-align: center;
      text-decoration: none;
      border: 1px solid black;
      &:hover {
        cursor: pointer;
        color: white;
        background-color: ${gray.regular};
        text-shadow: 1px 1px 0px black, 0px 0px 2px black;
      }
      &:active {
        color: white;
        background-color: ${gray.regular};
        text-shadow: 1px 1px 0px black, 0px 0px 2px black;
      }
    }
  }
  .scroll-link {
    text-align: left;
    border: 0;
    margin: 2.4px 0px;
    padding: 6px;
    border: 1px dashed black;
    background-color: transparent;
    &:hover:enabled {
      cursor: pointer;
      color: white;
      background-color: ${gray.regular};
      text-shadow: 1px 1px 0px black, 0px 0px 2px black;
    }
    &:active {
      cursor: pointer;
      color: white;
      background-color: ${gray.regular};
      text-shadow: 1px 1px 0px black, 0px 0px 2px black;
    }
  }
  .link-H1 {
    margin-left: 0px;
    padding: 6px;
  }
  .link-H2 {
    margin-left: 28px;
    padding: 4px 6px;
  }
  .link-H3 {
    margin-left: 56px;
    padding: 3px 6px;
  }
`

export const sidebar = css`
  z-index: 10;
  display: none;
  grid-area: sidebar;
  position: sticky;
  top: ${sizes.navBar.height};
  height: 100vh;
  border-left: 1px solid ${gray.dark};
  background-color: white;
  @media (min-width: 1024px) {
    display: initial;
  }
`

export const hamburgerMenu = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .hamburger {
    z-index: 20;
    cursor: pointer;
    position: fixed;
    width: 50px;
    height: 50px;
    right: 24px;
    padding: 0;
    bottom: 48px;
    border: none;
    border-radius: 50%;
    background-color: transparent;
    &:active {
      svg {
        fill: white;
        stroke: ${gray.regular};
      }
    }
    svg {
      fill: ${gray.regular};
      stroke: white;
      stroke-width: 2px;
    }
  }
  .menu {
    z-index: 10;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: fixed;
    top: ${sizes.navBar.height};
    right: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - ${sizes.navBar.height});
    overflow-y: scroll;
    background-color: ${gray.background};
    .links {
      z-index: 11;
      display: flex;
      flex-direction: column;
      a {
        text-decoration: none;
        margin: 20px;
        padding: 40px;
      }
    }
  }
  @media (min-width: 1024px) {
    display: none;
  }
`

// ===========================NAVBAR

export const navbar = css`
  z-index: 15;
  display: flex;
  position: fixed;
  top: 0px;
  justify-content: center;
  align-items: center;
  height: ${sizes.navBar.height};
  width: 100vw;
  border-bottom: 1px solid ${pink.background};
  background-color: ${gray.regular};
  a {
    display: inherit;
    align-items: center;
    margin: 0 20px;
    padding: 3px;
    svg {
      margin-right: 8px;
      fill: white;
    }
    span {
      margin-top: 2px;
    }
    @media (max-width: 600px) {
      svg {
        margin: 0px;
      }
      span {
        display: none;
      }
    }
  }
`

export const navbarEmpty = css`
  height: ${sizes.navBar.height};
`

// =============================================KANJI

export const kanjiTable = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px 0 40px 0;
`

export const kanjiCard = css`
  display: flex;
  text-align: center;
  font-family: ${kanjiSansFont};
  min-width: 280px;
  max-width: 324px;
  min-height: 192px;
  margin: 10px;
  border: 2px solid ${pink.regular};
  border-radius: 8px;
  @media (max-width: 320px) {
    min-width: 75vw;
    max-width: 80vw;
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 110px;
    border-right: 1px solid ${pink.regular};
    border-radius: 4px 0 0 4px;
    .char {
      padding-top: 12px;
      font-size: 5rem;
      &:hover {
        font-family: ${kanjiSerifFont};
      }
    }
    .animation {
      .reset {
        color: white;
        border: 1px dashed ${pink.regular};
        background-color: ${pink.background};
        &:hover {
          cursor: pointer;
        }
        &:active {
          background-color: ${pink.dark};
        }
        &:focus {
          border: 1px solid ${pink.regular};
        }
      }
    }
    .strokes {
      width: 100%;
      padding: 4px 0px;
      margin-top: 8px;
      border: 0px;
      color: white;
      background-color: ${pink.regular};
      &:hover {
        cursor: pointer;
      }
      &:active {
        background-color: ${pink.dark};
      }
    }
    .number {
      padding: 4px 0px;
    }
  }
  .right {
    display: grid;
    grid-template: "reading" 1fr "meaning" 1fr / 1fr;
    width: 66%;
    .reading {
      grid-area: reading;
      width: 100%;
      height: 100%;
      border: 0px;
      padding: 0px 8px;
      margin: auto;
      border-radius: 0 5px 0 0;
      color: white;
      background-color: ${pink.regular};
      &:hover {
        cursor: pointer;
      }
      &:active {
        background-color: ${pink.dark};
      }
    }
    .meaning {
      grid-area: meaning;
      padding: 0px 8px;
      margin: auto;
      border: 0px;
    }
  }
`

// ===================================================FOOTER

export const footer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  width: 100%;
  padding-top: 16px;
  color: white;
  background-color: ${gray.regular};
  div {
    width: 65%;
    margin: 8px 0px;
    @media (max-width: 411px) {
      width: 85%;
    }
  }
  .logo {
    fill: white;
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 64px;
    @media (max-width: 450px) {
      position: static;
      display: block;
      margin: 4px auto;
      transform: translateY(0%);
    }
  }
`

export const social = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 411px) {
    flex-direction: row;
  }
  .network {
    display: flex;
    padding: 8px 8px 6px;
    margin: 6px 0px;
    font-size: 1.16rem;
    text-decoration: none;
    color: white;
    &:hover > * {
      -webkit-filter: drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.8));
      filter: drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.8));
    }
    &#facebook:hover > * {
      color: ${brands.facebook};
      fill: ${brands.facebook};
    }
    &#twitter:hover > * {
      color: ${brands.twitter};
      fill: ${brands.twitter};
    }
    &#github:hover > * {
      color: ${brands.github};
      fill: ${brands.github};
    }
    svg {
      margin-right: 8px;
      fill: white;
    }
  }
`
