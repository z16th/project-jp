import React from "react"
import logo from "../utils/images/logo.svg"

export default function LolzSocial() {
  return (
    <div id="lolz-social">
      <div className="networks">
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
      </div>
      <img id="lolz-logo" src={logo} alt="logo" />
    </div>
  )
}
