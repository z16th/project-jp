import { css } from "@emotion/core"
import { pink, yellow, blue, gray, brands } from "./colors"
import { kanjiSansFont, kanjiSerifFont, typeScale } from "./typography"

const minWidth = 280
const maxWidth = 800

export const japaneseChar = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  margin: 0px;
  .furigana {
    text-align: center;
    font-family: ${kanjiSansFont};
    font-size: ${typeScale.header2}px;
    @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
      font-size: calc(
        20px + (${typeScale.header2} - 20) *
          ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
      );
    }
    @media (min-width: ${maxWidth}px) {
      font-size: ${typeScale.header2}px;
    }
  }
  .char {
    padding-top: 4px;

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

// ============================ WOTD

export const wotd = css`
  display: inline-block;
  .word {
    display: flex;
    flex-direction: row;
    .furigana {
      text-shadow: none;
    }
    .jp-char {
      text-shadow: 1px 1px 2px black;
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
`

// ===========================SIDEBAR

export const sidebar = css`
  display: none;
  z-index: 10;
  grid-area: sidebar;
  position: sticky;
  align-self: flex-start;
  top: 48px;
  height: 100vh;
  grid-area: sidebar;
  .nav-buttons {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 40px 20px;
    .scroll-link {
      text-align: left;
      width: fit-content;
      border: 0;
      &:hover {
        background-color: ${pink.regular};
      }
    }
    .link-H1 {
      margin-left: 0px;
    }
    .link-H2 {
      margin-left: 32px;
    }
    .link-H3 {
      margin-left: 64px;
    }
  }
  @media (min-width: 1024px) {
    display: initial;
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
  background-color: #545454;
  a {
    display: inherit;
    justify-content: center;
    align-items: center;
    margin: 20px;
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

// =============================CUSTOM LINK
export const linkUnactive = css`
  text-decoration: none;
  font-size: ${typeScale.header5}px;
  color: white;
  text-shadow: 0px 0px 1px white;
`

export const linkActive = css`
  font-size: ${typeScale.header4}px;
  font-weight: bold;
  border-bottom: 2px solid black;
`

// =================================HAMBURGER MENU

export const hamburgerMenu = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .hamburger {
    z-index: 20;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: fixed;
    bottom: 48px;
    right: 24px;
    cursor: pointer;
  }
  .menu {
    z-index: 10;
    flex-direction: column;
    align-items: center;
    position: fixed;
    /* Navbar height */
    top: 48px;
    width: 100%;
    height: 100vh;
    text-align: center;
    background-color: white;
    .links {
      display: flex;
      flex-direction: column;
      a {
        text-decoration: none;
        background-color: #373737;
        margin: 20px;
        padding: 40px;
      }
    }
  }
  @media (min-width: 1024px) {
    display: none;
  }
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
  border-radius: 8px;
  background-color: ${pink.background};
  @media (max-width: 320px) {
    min-width: 75vw;
    max-width: 80vw;
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 110px;
    border-radius: 4px 0 0 4px;
    background-color: ${pink.regular};
    .char {
      padding-top: 12px;
      font-size: 5rem;
      &:hover {
        font-family: ${kanjiSerifFont};
      }
    }
    .animation {
      padding-top: 16px;
    }
    .strokes {
      width: 100%;
      border: 0px;
      padding: 0px;
      color: white;
      padding: 4px 0px;
      margin-top: 8px;
      background-color: ${pink.dark};
      &:hover {
        cursor: pointer;
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
      border-radius: 0 4px 0 0;
      color: white;
      background-color: ${pink.dark};
      &:hover {
        cursor: pointer;
      }
    }
    .meaning {
      grid-area: meaning;
      margin: auto;
      border: 0px;
      padding: 0px 8px;
    }
  }
`

// =============================================ANIMATIONS

export const charAnimation = css`
  svg {
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
  button {
    display: none;
  }
`

// ===================================================SOCIAL

export const footer = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  background-color: ${gray.regular};
  p {
    font-size: ${typeScale.body2};
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
      text-shadow: 0 0 2px black, 1px 1px 0px black;
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
