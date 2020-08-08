import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { blue, yellow, gray } from "./colors"
import {
  primaryFont,
  secondaryFont,
  typeScale,
  kanjiSansFont,
  kanjiSerifFont,
} from "./typography"

const minWidth = 280
const maxWidth = 800

// ---------------------------------------------PLAIN TEXT

export const P2 = styled.p`
  font-family: ${secondaryFont};
  font-size: ${typeScale.body2};
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
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

// ---------------------------------------------TABLES

export const TableElement1 = styled.p`
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
export const TableElement2 = styled.p`
  margin: 0px 0px;
  font-family: ${kanjiSansFont};
  font-size: ${typeScale.tableContent};
  @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
    font-size: calc(
      12px + (${typeScale.tableContent} - 16) *
        ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
    );
  }
  @media (min-width: ${maxWidth}px) {
    font-size: ${typeScale.tableContent}px;
  }
`

export const TableHeader = styled.p`
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
    font-size: ${typeScale.tableHeader}px;
  }
`

export const KanaTable = styled.section`
  display: flex;
  justify-content: center;
  grid-gap: 8px;
  margin: 20px 0px 40px 0px;
  .tab-head {
    color: ${gray.light};
  }
  .kana {
    padding: 8px;
    border-radius: 8px;
    background-color: ${(props) => props.color.light};
    &:hover {
      background-color: ${(props) => props.color.regular};
      font-family: ${kanjiSerifFont};
    }
  }
  .exception {
    background-color: ${gray.dark};
  }
  .special {
    border: 2px solid black;
    margin-top: 20px;
  }
  .on-hover {
    &:hover {
      font-family: ${kanjiSerifFont};
    }
  }
`

// -----------------------------------------------------COLORFUL

export const Callout = styled.p`
  display: inline-block;
  font-family: ${secondaryFont};
  font-size: ${typeScale.body1};
  margin: 4px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${yellow.background};
`
export const Example = styled.p`
  display: inline-block;
  font-family: ${secondaryFont};
  font-size: ${typeScale.example};
  margin: 4px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${blue.background};
`
// ---------------------------------------------------PAGE

export const PageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 16px;
  .content {
    padding: 0px 20px;
    margin-bottom: 40px;
    box-sizing: border-box;
  }
  @media (min-width: 1025px) {
    display: grid;
    grid-template: ". content sidebar" 1fr / 1fr 50% 3fr;
    .main-content {
      grid-area: content;
    }
  }
  @media (max-width: 280px) {
    .content {
      padding: 0px 10px;
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
          font-size: ${typeScale.header5};
        }

        h6 {
          margin: 10px 0px;
          font-family: ${primaryFont};
          font-size: ${typeScale.header6};
        }

        p {
          font-family: ${secondaryFont};
          font-size: ${typeScale.body1};
        }
        a {
          font-family: ${secondaryFont};
          font-size: ${typeScale.header1};
        }
      `}
    />
    <main id="layout">{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
