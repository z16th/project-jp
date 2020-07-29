import styled from "@emotion/styled"
import { blue, yellow } from "./colors"
import {
  primaryFont,
  secondaryFont,
  typeScale,
  kanjiSansFont,
  kanjiSerifFont,
} from "./typography"

const minWidth = 311
const maxWidth = 800

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
      28px + (${typeScale.header2} - 28) *
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
      24px + (${typeScale.header3} - 24) *
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
      20px + (${typeScale.header4} - 20) *
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

export const TableElement = styled.p`
  margin: 0px 0px;
  font-family: ${kanjiSansFont};
  font-size: ${typeScale.tableContent};
  @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
    font-size: calc(
      20px + (${typeScale.tableContent} - 20) *
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

// ≣≣≣≣≣≣≣≣≣≣≣≣≣≣
// Cool stuff below here
// ≣≣≣≣≣≣≣≣≣≣≣≣≣≣

export const Callout = styled.p`
  display: inline-block;
  font-family: ${secondaryFont};
  font-size: ${typeScale.body1};
  margin: 0px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${yellow.background};
`
export const Example = styled.p`
  display: inline-block;
  font-family: ${secondaryFont};
  font-size: ${typeScale.example};
  margin: 4px 0px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${blue.background};
`
