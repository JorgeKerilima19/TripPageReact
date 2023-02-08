import "../index.css";
import "../styles/navbarStyle.css";
import { NavItems } from "../js/navbarItems";

export default function Navbar({isOpen, setOpen}) {
  let toggleOpen = isOpen ? "open" : "";
  return (
    <nav className="nav">
      <svg className="svg-holder-image"></svg>
      <ul className={`navbar ${toggleOpen}`} onClick={setOpen}>
        {NavItems.map((item, index) => {
          return (
            <li key={index} className="navbar-item">
              <a href="/" className="item-link">
                <svg className={item.className}></svg>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
