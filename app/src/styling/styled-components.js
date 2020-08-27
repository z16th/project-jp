import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { blue, yellow, gray, pink, purple } from "./colors"
import {
  primaryFont,
  secondaryFont,
  typeScale,
  kanjiSansFont,
  kanjiSerifFont,
} from "./typography"
import texture from "../utils/images/paper.jpg"

const minWidth = 280
const maxWidth = 800

export const H = styled.span`
  background-color: ${yellow.background};
  padding: 2px 3px;
  border-radius: 4px;
`
export const K = styled.span`
  background-color: ${blue.background};
  padding: 2px 3px;
  border-radius: 4px;
`
export const Kj = styled.span`
  background-color: ${pink.background};
  padding: 2px 3px;
  border-radius: 4px;
`
export const R = styled.span`
  background-color: ${purple.background};
  padding: 2px 3px;
  border-radius: 4px;
`

// ---------------------------------------------TABLES

export const TableElement1 = styled.span`
  margin: 0px 0px;
  font-family: ${kanjiSansFont};
  font-size: ${typeScale.tableContent};
  @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
    font-size: calc(
      16px + (${typeScale.tableContent} - 16) *
        ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
    );
  }
  @media (min-width: ${maxWidth}px) {
    font-size: ${typeScale.tableContent}px;
  }
`
export const TableElement2 = styled.span`
  margin: 0px 0px;
  font-family: ${kanjiSansFont};
  @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
    font-size: calc(
      12px + (${typeScale.tableContent - 18} - 16) *
        ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
    );
  }
  @media (min-width: ${maxWidth}px) {
    font-size: ${typeScale.tableContent - 24}px;
  }
`

export const TableHeader = styled.span`
  margin: 0px 0px;
  font-family: ${kanjiSansFont};
  font-size: ${typeScale.tableHeader};
  @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
    font-size: calc(
      16px + (${typeScale.tableHeader} - 16) *
        ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
    );
  }
  @media (min-width: ${maxWidth}px) {
    font-size: ${typeScale.tableHeader - 10}px;
  }
`

export const KanaTable = styled.section`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.columns},
    ${(props) => [props.columnSize]}
  );
  grid-template-areas: ${(props) => props.areas};
  margin: 20px 0px 40px 0px;
  .tab-header {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${gray.light};
  }
  .kana {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
    svg {
      width: 64px;
      height: auto;
      @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
        width: calc(
          18px + (${typeScale.tableContent} - 12) *
            ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
        );
      }
      @media (min-width: ${maxWidth}px) {
        width: ${typeScale.tableContent}px;
      }
    }
  }
  .kana.hiragana {
    background-color: ${yellow.background};
  }
  .kana.katakana {
    background-color: ${blue.background};
  }
  .kana.romaji {
    background-color: ${purple.background};
  }
  .exception {
    border: 2px dotted ${gray.regular};
  }
  .special {
    border: 2px solid black;
    margin-top: 20px;
  }
  .kana.extended {
    padding: 4px;
    margin: 4px;
    svg {
      width: 42px;
      height: auto;
      font-family: ${kanjiSansFont};
      @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
        width: calc(
          24px + (42 - 38) *
            ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
        );
      }
      @media (min-width: ${maxWidth}px) {
        width: 42px;
      }
    }
  }
  span:hover {
    font-family: ${kanjiSerifFont};
  }
`

// ----------------------------------------------COLORFUL

export const Callout = styled.div`
  display: block;
  width: fit-content;
  font-family: ${secondaryFont};
  font-size: ${typeScale.body1};
  margin: 8px;
  padding: 16px;
  border-radius: 8px;
  border: 2px dashed ${yellow.regular};
`
export const Example = styled.div`
  display: block;
  width: fit-content;
  font-family: ${secondaryFont};
  font-size: ${typeScale.body1};
  margin: 16px 8px;
  padding: 16px;
  border-radius: 8px;
  border: 4px dotted ${blue.regular};
`
export const Note = styled.div`
  font-family: ${secondaryFont};
  font-size: ${typeScale.body2};
  line-height: 1rem;
`

export const Highlight = styled.div`
  display: block;
  /* width: fit-content; */
  margin: 0 0 8px 0;
  padding: 16px;
  border-radius: 8px;
  border: 2px dashed ${gray.dark};
`

// ---------------------------------------------------PAGE

export const PageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(${gray.background}, ${gray.background}),
    url(${texture});
  background-size: 64px;
  .main-content {
    background-color: white;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template:
      ". content sidebar ." 1fr / minmax(0px, 15%) minmax(50%, 768px)
      max-content 15%;
    .main-content {
      grid-area: content;
      .content {
        padding: 20px 40px;
      }
    }
  }
  @media (max-width: 1024px) {
    .content {
      padding: 20px 12px;
    }
  }
  @media (max-width: 280px) {
    .content {
      padding: 20px 12px;
    }
  }
`
// ==============================GLOBAL
export const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        h1 {
          margin: 20px 0px;
          font-family: ${primaryFont};
          font-size: ${typeScale.header1}px;
          @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
            font-size: calc(
              32px + (${typeScale.header1} - 32) *
                ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
            );
          }
          @media (min-width: ${maxWidth}px) {
            font-size: ${typeScale.header1}px;
          }
        }

        h2 {
          margin: 18px 0px;
          font-family: ${primaryFont};
          font-size: ${typeScale.header2};
          @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
            font-size: calc(
              26px + (${typeScale.header2} - 26) *
                ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
            );
          }
          @media (min-width: ${maxWidth}px) {
            font-size: ${typeScale.header2}px;
          }
        }

        h3 {
          margin: 16px 0px;
          font-family: ${primaryFont};
          font-size: ${typeScale.header3};
          @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
            font-size: calc(
              22px + (${typeScale.header3} - 22) *
                ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
            );
          }
          @media (min-width: ${maxWidth}px) {
            font-size: ${typeScale.header3}px;
          }
        }

        h4 {
          margin: 14px 0px;
          font-family: ${primaryFont};
          font-size: ${typeScale.header4};
          @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
            font-size: calc(
              18px + (${typeScale.header4} - 18) *
                ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
            );
          }
          @media (min-width: ${maxWidth}px) {
            font-size: ${typeScale.header4}px;
          }
        }

        h5 {
          margin: 12px 0px;
          font-family: ${primaryFont};
          font-size: ${typeScale.header5}px;
        }

        h6 {
          margin: 10px 0px;
          font-family: ${primaryFont};
          font-size: ${typeScale.header6}px;
        }

        p {
          font-family: ${secondaryFont};
          font-size: ${typeScale.body1};
          line-height: 1.5rem;
        }
        a {
          font-family: ${secondaryFont};
          font-size: ${typeScale.header1};
        }
        ul {
          line-height: 1.25rem;
        }
        button {
          padding: 8px;
          color: black;
          text-align: center;
          text-decoration: none;
          border: none;
          &:hover {
            color: white;
            background-color: ${gray.light};
            text-shadow: 1px 1px 0px black, 0px 0px 2px black;
          }
          &:active {
            color: white;
            background-color: ${gray.regular};
            text-shadow: 1px 1px 0px black, 0px 0px 2px black;
          }
        }
      `}
    />
    <Global
      styles={css`
        .bibliography {
          a,
          span {
            text-decoration: none;
            color: ${blue.dark};
            border-bottom: 1px dotted ${gray.dark};
            width: fit-content;
            &:hover {
              cursor: pointer;
            }
          }
        }
        .small {
          font-size: ${typeScale.body2};
        }
        .link-to {
          display: inline-block;
          margin: 8px 0;
          text-decoration: none;
          color: ${pink.dark};
          border-bottom: 1px dashed ${gray.dark};
          width: fit-content;
          &:hover {
            cursor: pointer;
          }
        }
        .anim-example {
          margin: 12px 4px;
          .reset {
            color: white;
            border: 1px dashed ${gray.regular};
            background-color: ${gray.background};
            &:hover {
              cursor: pointer;
            }
            &:active {
              background-color: ${gray.dark};
            }
            &:focus {
              border: 1px solid ${gray.regular};
            }
          }
        }
        .fade-appear {
          opacity: 0;
        }
        .fade-appear-active {
          opacity: 1;
          transition: opacity 250ms ease-in;
        }
      `}
    />
    <main id="layout">{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
