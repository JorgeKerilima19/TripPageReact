import { Link } from "react-router-dom";

const TourCard = ({ tour }) => {
  return (
    <Link
      to={`./${tour.placeId}`}
      className="card__container-md flex flex__column flex__gap-sm flex__item-center ps__relative"
    >
      <img
        className="destination-card__img width__90"
        src={tour.banner}
        alt=""
      />
      <div className="flex flex__sp-btw width__90">
        <h4 className="card__title">{tour.name}</h4>
        <span className="card__price">$/{tour.pricePerPerson}</span>
      </div>
    </Link>
  );
};

export default TourCard;
