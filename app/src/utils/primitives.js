import styled from "@emotion/styled"
import { blue, yellow } from "./colors"
import { primaryFont, secondaryFont, typeScale } from "./typography"

const minWidth = 400;
const maxWidth = 800;

export const H1 = styled.h1`
  font-family: ${primaryFont};
  font-size: ${typeScale.header1};
  font-size: calc(12px + (24 - 12) * ((100vw - 400px) / (800 - 400)));
  margin: 20px 0px;
`
export const H2 = styled.h2`
  font-family: ${primaryFont};
  font-size: ${typeScale.header2};
  margin: 18px 0px;
`
export const H3 = styled.h3`
  font-family: ${primaryFont};
  font-size: ${typeScale.header3};
  margin: 16px 0px;
`
export const H4 = styled.h4`
  font-family: ${primaryFont};
  font-size: ${typeScale.header4};
  margin: 14px 0px;
`
export const H5 = styled.h5`
  font-family: ${primaryFont};
  font-size: ${typeScale.header5};
  margin: 12px 0px;
`
export const H6 = styled.h6`
  font-family: ${primaryFont};
  font-size: ${typeScale.header6};
  margin: 10px 0px;
`
export const P1 = styled.p`
  font-family: ${secondaryFont};
  font-size: ${typeScale.body1};
`
export const P2 = styled.p`
  font-family: ${secondaryFont};
  font-size: ${typeScale.body2};
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
