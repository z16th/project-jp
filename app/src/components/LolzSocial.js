/** @jsx jsx */
import { jsx } from "@emotion/core"
import { social } from "../styling"

import { ReactComponent as Facebook } from "../utils/icons/icons8-facebook.svg"
import { ReactComponent as Twitter } from "../utils/icons/icons8-twitter.svg"
import { ReactComponent as GitHub } from "../utils/icons/icons8-octocat.svg"

export default function LolzSocial() {
  return (
    <nav id="lolz-social" css={social}>
      <a
        id="facebook"
        className="network"
        href="https://www.facebook.com/XVI.LoLz"
      >
        <Facebook />
        <span>Facebook</span>
      </a>

      <a id="twitter" className="network" href="https://twitter.com/XVI_LoLz">
        <Twitter />
        <span>Twitter</span>
      </a>

      <a id="github" className="network" href="https://github.com/XVI-LoLz">
        <GitHub />
        <span>GitHub</span>
      </a>
    </nav>
  )
}
