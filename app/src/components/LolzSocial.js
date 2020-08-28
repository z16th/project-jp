/** @jsx jsx */
import { jsx } from "@emotion/core"
import { ReactComponent as Logo } from "../utils/icons/logo.svg"
import { social } from "../styling"

export default function LolzSocial() {
  return (
    <section id="lolz-social" css={social}>
      <nav>
        <a
          id="facebook"
          className="network"
          href="https://www.facebook.com/XVI.LoLz"
        >
          <i className="fab fa-facebook" />
          <span>Facebook</span>
        </a>

        <a id="twitter" className="network" href="https://twitter.com/XVI_LoLz">
          <i className="fab fa-twitter" />
          <span>Twitter</span>
        </a>

        <a id="github" className="network" href="https://github.com/XVI-LoLz">
          <i className="fab fa-github-alt" />
          <span>GitHub</span>
        </a>
      </nav>
      <Logo className="logo" />
    </section>
  )
}
