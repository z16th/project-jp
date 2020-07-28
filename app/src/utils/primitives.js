import styled from "@emotion/styled"
import { primaryFont, secondaryFont, typeScale } from "./typography"

export const H1 = styled.h1`
  font-family: ${primaryFont};
  font-size: ${typeScale.header1};
`
export const H2 = styled.h2`
  font-family: ${primaryFont};
  font-size: ${typeScale.header2};
`
export const H3 = styled.h3`
  font-family: ${primaryFont};
  font-size: ${typeScale.header3};
`
export const H4 = styled.h4`
  font-family: ${primaryFont};
  font-size: ${typeScale.header4};
`
export const H5 = styled.h5`
  font-family: ${primaryFont};
  font-size: ${typeScale.header5};
`
export const H6 = styled.h6`
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
