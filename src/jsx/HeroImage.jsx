import { NavItems as data } from "../data/navbarItems";
import "../styles/main.css";

export default function HeroImage({ src }) {
  return (
    <>
      {data.map((el, index) => {
        if (el.title === src) {
          return (
            <section
              key={index}
              className={`hero-section ${el.classNameImage}`}
              style={{ backgroundImage: `url(${el.image})` }}
            >
              <div>
                <h2 className="hero-image_title">{el.name}</h2>
                <h3 className="hero-image_slogan">{el.textDescription}</h3>
                <a href="#"><button className={el.title==="Home"? "button":"hide"}>Choose your Destination</button></a>
              </div>
            </section>
          );
        }
      })}
    </>
  );
}
