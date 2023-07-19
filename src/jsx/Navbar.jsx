import "../index.css";
import "../styles/navbarStyle.css";
import { NavItems } from "../data/navbarItems";
import { Link } from "react-router-dom";
import img from "../assets/socialLogo.svg";

export default function Navbar({ isOpen, setOpen }) {
  let toggleOpen = isOpen ? "open" : "";

  return (
    <nav className="nav">
      <img src={img} className="nav-logo" alt="logo" />
      <ul className={`navbar ${toggleOpen}`}>
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
  );
}
