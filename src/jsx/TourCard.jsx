import { useContext } from "react";
import { TourContext } from "../context/TourContext";

const TourCard = ({ tour }) => {
  const { setTour } = useContext(TourContext);

  return (
    <div
      onClick={() => {
        console.log(tour);
        setTour(tour);
      }}
      className="flex flex__column flex__gap-sm flex__item-center ps__relative"
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
    </div>
  );
};

export default TourCard;
