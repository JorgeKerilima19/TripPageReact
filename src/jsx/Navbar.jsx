import "../index.css";
import "../styles/navbarStyle.css";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

import img from "../assets/socialLogo.svg";
import HamburgerMenu from "../jsx/HamburgerMenu";
import Footer from "../jsx/Footer";

export const NavItems = [
  {
    title: "Home",
    name: "Sky Travel",
    textDescription: "A New Sky, A New Life.",
    url: "/",
    className: "svg-holder-image",
    image:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    classNameImage: "",
  },
  {
    title: "About",
    name: "Who are we?",
    url: "/about",
    className: "svg-holder-image",
    image:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    classNameImage: "hero-section-small",
  },
  {
    title: "Service",
    name: "Our Destinations",
    url: "/service",
    className: "svg-holder-image",
    image:
      "https://images.unsplash.com/photo-1476067897447-d0c5df27b5df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    classNameImage: "hero-section-small",
  },
  {
    title: "Contact",
    name: "Need Help?",
    url: "/contact",
    className: "svg-holder-image",
    image:
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    classNameImage: "hero-section-small",
  },
  {
    title: "Register",
    name: "Sign In",
    url: "/register",
    className: "svg-holder-image",
    image:
      "https://images.unsplash.com/photo-1597667554307-885851e705c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    classNameImage: "hero-section-small",
  },
];

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
      <Footer />
    </>
  );
}
