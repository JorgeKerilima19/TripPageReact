import "../index.css";
import "../styles/navbarStyle.css";
import { NavItems } from "../data/navbarItems";
import { Link } from "react-router-dom";

export default function Navbar({ isOpen, setOpen }) {
  let toggleOpen = isOpen ? "open" : "";
  return (
    <nav className="nav">
      <svg className="logo-holder"></svg>
      <ul className={`navbar ${toggleOpen}`}>
        {NavItems.map((item, index) => {
          return (
            <li key={index} className="navbar-item">
              <Link className="item-link" to={item.url} onClick={setOpen}>
                <svg className={item.className}></svg>
                <span className="item-link_text">{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
