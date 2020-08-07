import { css } from "@emotion/core"
import { pink } from "./colors"
import { kanjiSansFont, kanjiSerifFont } from "./typography"

const minWidth = 280
const maxWidth = 800

// ===========================NAVBAR
export const navbar = css`
  display: flex;
  position: fixed;
  top: 0px;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 100%;
  background-color: rebeccapurple;
`

export const navbarEmpty = css`
  height: 48px;
`

// =============================CUSTOM LINK

export const linkActive = css`
  font-weight: bold;
  text-decoration: none;
  background-color: red;
`
export const linkUnactive = css`
  background-color: forestgreen;
`

// =================================HAMBURGER MENU

export const hamburgerMenu = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    justify-content: center;
    align-items: center;
    position: fixed;
    /* Navbar height */
    top: 48px;
    width: 100%;
    height: 100vh;
    text-align: center;
    background-color: white;
    .links {
      display: inherit;
      flex-direction: inherit;
      padding: 0px;
      a {
        text-decoration: none;
        padding: 40px;
        margin: 20px;
      }
    }
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
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-family: ${kanjiSansFont};
  width: 328px;
  height: 220px;
  margin: 10px;
  border-radius: 8px;
  background-color: ${pink.background};
  @media (max-width: 320px) {
    margin: 10px 0px;
    width: 300px;
    height: 204px;
  }
  @media (max-width: 280px) {
    margin: 10px 0px;
    width: 280px;
    height: 204px;
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 106px;
    height: 204px;
    border-radius: 4px;
    background-color: ${pink.regular};
    .char {
      font-size: 5rem;
      &:hover {
        font-family: ${kanjiSerifFont};
      }
    }
    .strokes {
      border: 0px;
      padding: 0px;
      color: white;
      padding: 4px 0px;
      margin-top: 32px;
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
    width: 198px;
    height: 204px;
    .reading {
      width: 198px;
      height: 102px;
      border: 0px;
      padding: 0px 8px;
      border-radius: 4px;
      color: white;
      background-color: ${pink.dark};
      &:hover {
        cursor: pointer;
      }
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
        80px + (100 - 100) *
          ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
      );
      height: calc(
        80px + (100 - 100) *
          ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
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
