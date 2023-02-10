import { NavItems as data } from "../js/navbarItems";
import "../styles/main.css";

export default function HeroImage({ src }) {
  return (
    <>
      {data.map((el, index) => {
        if (el.title === src) {
          return (
            <section
              key={index}
              className="hero-section"
              style={{ backgroundImage: `url(${el.image})` }}
            >
              <div>
                <h2>{el.title}</h2>
                <span>Description</span>
              </div>
            </section>
          );
        }
      })}
    </>
  );
}
