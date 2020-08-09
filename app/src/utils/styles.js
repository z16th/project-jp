import { css } from "@emotion/core"
import { pink } from "./colors"
import { kanjiSansFont, kanjiSerifFont, typeScale } from "./typography"

const minWidth = 280
const maxWidth = 800

// ===========================SIDEBAR

export const sidebar = css`
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
  @media (max-width: 1024px) {
    display: none;
  }
`

// ===========================NAVBAR
export const navbar = css`
  z-index: 10;
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
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .hamburger {
    position: fixed;
    top: 10px;
    right: 10px;
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
    border-radius: 4px;
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
      border-radius: 4px;
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

export const social = css`
  position: relative;
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 411px) {
      flex-direction: row;
    }
  }
  .network {
    display: inline-block;
    padding: 8px 8px 6px;
    margin: 6px 0px;
    text-decoration: none;
    color: #545454;
    font-size: 1.16rem;
    &:hover {
      color: white;
      background-color: #545454;
      border-radius: 2px;
    }
    i {
      margin-right: 8px;
    }
  }
  .logo {
    position: absolute;
    right: 0px;
    bottom: 0px;
    @media (max-width: 450px) {
      position: static;
      display: block;
      margin: 4px auto;
    }
  }
`
