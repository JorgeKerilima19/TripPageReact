import { useContext, useEffect } from "react";

import { TourContext } from "../context/TourContext";
import TourCard from "./TourCard";
import TourInfo from "./TourInfo";

export const Places = () => {
  const { destination, setTour, tour } = useContext(TourContext);

  useEffect(() => {
    if (destination) {
      setTour(destination.places[0]);
    }
  }, [destination]);

  if (tour) {
    return (
      <section className="flex width__full flex__gap-bg">
        <section className="flex flex__column flex__gap-md max__height pd-top-bottom__md">
          {destination?.places?.map((el) => (
            <TourCard key={el.placeId} tour={el} />
          ))}
        </section>
        <TourInfo tour={tour} />
      </section>
    );
  }
  return "No data";
};
