import "../styles/navbarStyle.css";
import { NavItems } from "../js/navbarItems";

export default function Navbar() {
  return (
    <header>
      <ul>{NavItems.map((item, index)=>{
        return(
          <li key={index}>
            <a href="/">
              <svg className={item.className}></svg>
              {item.title}
            </a>
          </li>
        )
      })}</ul>
    </header>
  );
}
