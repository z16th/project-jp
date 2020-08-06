import styled from "@emotion/styled"
import { blue, yellow } from "./colors"
import {
  primaryFont,
  secondaryFont,
  typeScale,
  kanjiSansFont,
} from "./typography"

const minWidth = 280
const maxWidth = 800

// ---------------------------------------------PLAIN TEXT

export const H1 = styled.h1`
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
`
export const H2 = styled.h2`
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
`
export const H3 = styled.h3`
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
`
export const H4 = styled.h4`
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
`
export const H5 = styled.h5`
  margin: 12px 0px;
  font-family: ${primaryFont};
  font-size: ${typeScale.header5};
`
export const H6 = styled.h6`
  margin: 10px 0px;
  font-family: ${primaryFont};
  font-size: ${typeScale.header6};
`


export const P1 = styled.p`
  font-family: ${secondaryFont};
  font-size: ${typeScale.body1};
`
export const P2 = styled.p`
  font-family: ${secondaryFont};
  font-size: ${typeScale.body2};
`



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
  justify-content: center;
  align-content: center;
  width: 100%;
  .content {
    padding: 0px 20px;
  }
  @media (min-width: 1025px) {
    .main-content {
      width: 50%;
    }
  }
  @media (max-width: 280px) {
    .content{
      padding: 0px 10px;
    }
  }
`