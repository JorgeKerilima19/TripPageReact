import { Link } from "react-router-dom";
import "../index.css";
import "../styles/home.css";

const Destinations = ({ item }) => {
  return (
    <>
      <Link
        to={`/service/${item.id}`}
        className="flex flex__column card__container-md flex__sp-center card"
      >
        <div className="flex flex__gap-sm flex__sp-center width__full">
          <img
            className="destination-card__img width__45"
            src={item.src1}
            alt="Image1"
          />
          <img
            className="destination-card__img width__45"
            src={item.src2}
            alt="Image2"
          />
        </div>
        <h2 className={`destination-card__route ${item.title}`}>
          {item.title}
        </h2>
        <div className="destination-card__description flex__column flex__sp-center flex__gap-md">
          <h3 className="card__title">
            {item.title},{" "}
            <small className="card__subtitle">{item.popular}</small>
          </h3>
          <p>{item.description}</p>
          <button className="card__button-full center">More Info</button>
        </div>
      </Link>
    </>
  );
};

export default Destinations;
