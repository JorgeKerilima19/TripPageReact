import { Link } from "react-router-dom";
import backToTop from "../helpers/functions/backToTop";

const TourCard = ({ tour }) => {
  return (
    <Link
      to={`./${tour.placeId}`}
      className="card__container-md flex flex__column flex__gap-sm flex__item-center ps__relative"
      onClick={() => {
        backToTop(352);
      }}
    >
      <img
        className="destination-card__img width__90"
        src={tour.banner}
        alt=""
      />
      <div className="flex flex__sp-btw flex__item-center width__90">
        <h4 className="card__title">{tour.name}</h4>
        <span className="card__price">$/{tour.pricePerPerson}</span>
      </div>
    </Link>
  );
};

export default TourCard;
