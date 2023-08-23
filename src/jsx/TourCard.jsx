import { useContext } from "react";
import { TourContext } from "../context/TourContext";

const TourCard = ({ tour }) => {
  const { setTour, largeScreen } = useContext(TourContext);

  return (
    <div
      onClick={() => {
        setTour(tour);
      }}
      className={`flex flex__column flex__gap-sm flex__item-center ps__relative ${
        largeScreen ? "tour__list-item" : ""
      }`}
    >
      <img
        className="tour__list-item__img width__90"
        src={tour.banner}
        alt=""
      />
      <div className="flex flex__sp-btw flex__item-center width__90">
        <h4 className="card__title">{tour.name}</h4>
        <span className="card__price font__weight-600">
          $/{tour.pricePerPerson}
        </span>
      </div>
    </div>
  );
};

export default TourCard;
