import { NavItems as data } from "../js/navbarItems";

export default function HeroImage({ src }) {
  return (
    <section>
      <img src="" alt="" />
      <div>
        {data.map((el, index) => {
          if (el.title === src) {
            return (
              <div key={index}>
                {el.title}
                <img src={el.image} alt="" />
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
