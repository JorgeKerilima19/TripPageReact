import "../index.css";
import "../styles/navbarStyle.css";
import { NavItems } from "../js/navbarItems";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        <svg className="svg-holder-image"></svg>
        <ul className="navbar">
          {NavItems.map((item, index) => {
            return (
              <li key={index}>
                <a href="/">
                  <svg className={item.className}></svg>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
