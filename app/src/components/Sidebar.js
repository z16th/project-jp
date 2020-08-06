import React, { useState } from "react"
import { useRouteMatch, useLocation } from "react-router-dom"
import styled from "@emotion/styled"
import { H3 } from "../utils"
import { CustomLink } from "./CustomLink"

const SidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  position: relative;
  .hamburger {
    position: fixed;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`

const MenuStyled = styled.button`
  display: ${props => props.isActive ? "initial" : "none"};
  z-index: 10;
  position: fixed;
  top: 48px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: white;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .links {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    list-style: none;
    align-items: center;
    padding: 0px;
    li {
      margin: 40px;
      a {
        text-decoration: none;
      }
    }
  }
`

export default function Sidebar({ title, links }) {
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
    <SidebarStyled>
      <button className="hamburger" onClick={handleClick}>
        <img src="https://img.icons8.com/material-rounded/20/000000/menu.png" />
      </button>
      <MenuStyled
        className={`menu`}
        onClick={deactivate}
        isActive={isActive}
      >
        <H3 className="header">{title}</H3>
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
      </MenuStyled>
    </SidebarStyled>
  )
}
