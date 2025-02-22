import React, { useState } from "react"
import closeIcon from "../assets/closeIcon.png"
import menuIcon from "../assets/menuIcon.png"

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)

    return (
      <nav className="navbar">
        <a href="/" className="navbar__title">
          Portfolio
        </a>
        <div className="navbar__menu">
          <img
            className="navbar__menuBtn"
            src={openMenu ? closeIcon : menuIcon}
            onClick={() => setOpenMenu(!openMenu)}
            alt="burger_menu"
          />
          <ul
            className={
              openMenu
                ? "navbar__menuOpen navbar__menuItems"
                : "navbar__menuItems"
            }
            onClick={() => setOpenMenu(false)}
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contacts</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}