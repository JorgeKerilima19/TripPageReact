import "../index.css";
import "../styles/home.css";

export default function Destinations({ item }) {
  return (
    <>
      <article className="flex flex__column card__container-md flex__sp-center card">
        <div className="flex flex__gap-sm flex__sp-center width__full">
          <img className="destination-card__img" src={item.src1} alt="Image1" />
          <img className="destination-card__img" src={item.src2} alt="Image2" />
        </div>
        <h2 className="destination-card__route">{item.title}</h2>
        <div className="destination-card__description">
          <h3 className="card__title">
            {item.title},{" "}
            <small className="card__subtitle">{item.popular}</small>
          </h3>
          <p className="card-description">{item.description}</p>
          <button className="button-medium">Book</button>
        </div>
      </article>
    </>
  );
}
