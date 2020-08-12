/**@jsx jsx */
import LolzSocial from "./LolzSocial"
import { jsx } from "@emotion/core"
import { footer } from "../styling"

export default function Footer() {
  return (
    <div id="footer" css={footer}>
      <hr />
      <p>
        La información que se encuentra en este sitio no es creada ni revisada
        por expertos, algunos elementos han sido traducidos de fuentes en
        inglés, por lo que puede o no resultar imprecisa. Lamento los
        inconvenientes que esto pueda provocar.
      </p>
      <p>
        Para comentarios sobre correcciones en la información accesibilidad de
        la página, contribuciones u otros asuntos no dudes en contactarme.
      </p>
      <LolzSocial />
    </div>
  )
}
