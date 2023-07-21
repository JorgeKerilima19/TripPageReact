import "../index.css";
import "../styles/navbarStyle.css";
import { NavItems } from "../data/navbarItems";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

import img from "../assets/socialLogo.svg";
import HamburgerMenu from "../jsx/HamburgerMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function setOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <header className="header">
        <HamburgerMenu isOpen={isOpen} setOpen={setOpen} />
        <nav className="nav">
          <img src={img} className="nav-logo" alt="logo" />
          <ul className={`navbar ${isOpen}`}>
            {NavItems.map((item, index) => {
              return (
                <li key={index} className="navbar-item">
                  <Link className="item-link" to={item.url} onClick={setOpen}>
                    <span className="item-link_text">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <main className="main__column">
        <Outlet></Outlet>
      </main>
    </>
  );
}
