import { Link } from "react-router-dom";
import "../index.css";
import "../styles/home.css";

import backToTop from "../helpers/functions/backToTop";

const Destinations = ({ item }) => {
  return (
    <>
      <Link
        to={`/service/${item.id}`}
        className="flex flex__column flex__sp-center ps__relative card"
        onClick={backToTop}
      >
        <div className="flex flex__gap-sm flex__sp-center width__full">
          <img
            className="homepage__destination-card__img width__full"
            src={item.src1}
            alt="Image1"
          />
        </div>
        <h2 className={`destination-card__route ${item.title}`}>
          {item.title}
        </h2>
        <div className="destination-card__description flex__column flex__sp-center flex__gap-md">
          <h3 className="card__title">{item.title}</h3>
          <p>{item.description}</p>
          <button className="card__button-full center">More Info</button>
        </div>
      </Link>
    </>
  );
};

export default Destinations;
