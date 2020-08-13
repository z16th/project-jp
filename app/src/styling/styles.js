import { css } from "@emotion/core"
import { pink, yellow, blue, green, gray, brands } from "./colors"
import { kanjiSansFont, kanjiSerifFont, typeScale } from "./typography"

const minWidth = 280
const maxWidth = 800

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
  border-bottom: 2px solid white;
`

// ============================ Word Of The Day

export const wotd = css`
  display: block;
  padding: 16px;
  border-radius: 16px;
  background-color: ${gray.background};
  .word {
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
    .jp-char {
      flex-direction: column;
      align-items: center;
      text-shadow: 1px 1px 2px black;
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
      }
      .katakana {
        color: ${blue.regular};
      }
      .kanji {
        color: ${pink.regular};
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

export const navSidebar = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 40px 20px;
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
        color: white;
        background-color: ${gray.regular};
        text-shadow: 1px 1px 0px black, 0px 0px 2px black;
      }
    }
  }
  .scroll-link {
    text-align: left;
    border: 0;
    margin: 2px 0px;
    padding: 6px;
    border: 1px dashed black;
    background-color: transparent;
    &:hover {
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
  top: 48px;
  height: 100vh;
  border-left: 1px solid ${gray.light};
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
    width: 48px;
    height: 48px;
    right: 24px;
    bottom: 48px;
    border: none;
    border-radius: 50%;
    background-color: ${gray.background};
    box-shadow: 2px 2px 4px black;
    &:active {
      background-color: ${gray.dark};
      box-shadow: 2px 2px 4px white;
    }
  }
  .menu {
    z-index: 10;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: fixed;
    top: 48px;
    right: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 48px);
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
  height: 48px;
  width: 100vw;
  border-bottom: 2px solid black;
  background-color: ${gray.regular};
  a {
    display: inherit;
    align-items: center;
    margin: 20px;
    padding: 2px;
    img {
      margin-right: 8px;
    }
    span {
      margin-top: 2px;
    }
    @media (max-width: 600px) {
      img {
        margin: 0px;
      }
      span {
        display: none;
      }
    }
  }
`

export const navbarEmpty = css`
  height: 48px;
`

// =============================================KANJI

export const kanjiTable = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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
  text-align: center;
  width: 100%;
  padding-top: 16px;
  color: white;
  background-color: ${gray.regular};
  p {
    width: 65%;
    margin: 8px 0px;
    @media (max-width: 411px) {
      width: 85%;
    }
  }
  hr {
    border: 0;
    clear: both;
    display: block;
    width: 96%;
    background-color: #000;
    height: 1px;
  }
`

export const social = css`
  position: relative;
  width: 100%;
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 411px) {
      flex-direction: row;
    }
    &:hover {
      text-shadow: 0 0 1px black, 1px 1px 0px black;
    }
    #facebook:hover {
      color: ${brands.facebook};
    }
    #twitter:hover {
      color: ${brands.twitter};
    }
    #github:hover {
      color: ${brands.github};
    }
  }
  .network {
    display: inline-block;
    padding: 8px 8px 6px;
    margin: 6px 0px;
    font-size: 1.16rem;
    text-decoration: none;
    color: white;
    i {
      margin-right: 8px;
    }
  }
  .logo {
    position: absolute;
    right: 10px;
    bottom: 50%;
    width: 64px;
    transform: translateY(50%);
    @media (max-width: 450px) {
      position: static;
      display: block;
      margin: 4px auto;
      transform: translateY(0%);
    }
  }
`
