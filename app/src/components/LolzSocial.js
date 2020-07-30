import React from "react"
import styled from "@emotion/styled"
import { H4 } from "../utils"
import logo from "../utils/images/logo.svg"

const SocialStyled = styled.div`
  position: relative;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 411px) {
      flex-direction: row;
    }
  }
  .network {
    display: inline-block;
    padding: 8px 8px 6px;
    margin: 6px 0px;
    text-decoration: none;
    color: #545454;
    font-size: 1.16rem;
    &:hover {
      color: white;
      background-color: #545454;
      border-radius: 2px;
    }
    i {
      margin-right: 8px;
    }
  }
  .logo {
    position: absolute;
    right: 0px;
    bottom: 0px;
    @media (max-width: 450px) {
      position: static;
      display: block;
      margin: 4px auto;
    }
  }
`

export default function LolzSocial() {
  return (
    <SocialStyled id="lolz-social">
      <div className="wrapper">
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
      <img className="logo" src={logo} alt="logo" />
    </SocialStyled>
  )
}
