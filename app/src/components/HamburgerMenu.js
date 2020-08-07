/**@jsx jsx */
import { useState } from "react"
import { useRouteMatch, useLocation } from "react-router-dom"
import { jsx } from "@emotion/core"
import CustomLink from "./CustomLink"
import { hamburgerMenu } from "../utils"

export default function HamburgerMenu({ title, links }) {
  const { url } = useRouteMatch()
  const location = useLocation()
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive((state) => setIsActive(!state))
  }

  const deactivate = () => {
    setIsActive(false)
  }

  return (
    <div id="hamburger-menu" css={hamburgerMenu}>
      <button className="hamburger" onClick={handleClick}>
        {isActive ? (
          <img src="https://img.icons8.com/emoji/20/000000/minus-emoji.png" alt="botón - abrir menú" />
        ) : (
          <img src="https://img.icons8.com/emoji/20/000000/plus-emoji.png" alt="botón - cerrar menú"/>
        )}
      </button>
      <div
        className={`menu`}
        onClick={deactivate}
        style={isActive ? { display: "inherit" } : { display: "none" }}
      >
        <h1 className="header">{title.toUpperCase()}</h1>
        <ul className="links">
          {links.map((link) => (
            <CustomLink
              key={link}
              to={{
                pathname: `${url}/${link}`,
                search: location.search,
              }}
            >
              {link.toUpperCase()}
            </CustomLink>
          ))}
        </ul>
      </div>
    </div>
  )
}
