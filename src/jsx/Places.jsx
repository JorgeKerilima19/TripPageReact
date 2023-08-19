import { useContext, useEffect } from "react";

import { TourContext } from "../context/TourContext";
import TourCard from "./TourCard";

export const Places = () => {
  const { destination, setTour, tour } = useContext(TourContext);

  useEffect(() => {
    if (destination) {
      setTour(destination.places[0]);
    }
  }, [destination]);

  return (
    <section className="flex width__full">
      <section className="flex flex__column flex__sp-center">
        {destination?.places?.map((el) => (
          <TourCard key={el.placeId} tour={el} />
        ))}
      </section>
      <section className="tour__info width__70 flex__container">
        <h3 className="section__title">
          {tour ? `${tour.name}` : "Loading Data"}
        </h3>
      </section>
    </section>
  );
};
