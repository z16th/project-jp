import React from "react"
import styled from "@emotion/styled"
import { P2 } from "../utils"

const DisclaimerStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  .p {
    width: 65%;
    margin: 8px 0px;
    @media (max-width: 411px) {
      width: 85%;
    }
  }
`

const HR = styled.hr`
  border: 0;
  clear: both;
  display: block;
  width: 96%;
  background-color: #000;
  height: 1px;
`

export default function Disclaimer() {
  return (
    <DisclaimerStyled id="disclaimer">
      <HR></HR>
      <P2 className="p">
        La información que se encuentra en este sitio no es creada ni revisada
        por expertos, algunos elementos han sido traducidos de fuentes en
        inglés, por lo que puede o no resultar imprecisa. Lamento los
        inconvenientes que esto pueda provocar.
      </P2>
      <P2 className="p">
        Para comentarios sobre correcciones en la información accesibilidad de
        la página, contribuciones u otros asuntos no dudes en contactarme.
      </P2>
    </DisclaimerStyled>
  )
}
