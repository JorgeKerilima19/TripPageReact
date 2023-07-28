import { useContext } from "react";

import { TourContext } from "../context/tourContext";
import TourCard from "./TourCard";

export const Places = () => {
  const { destination } = useContext(TourContext);
  return (
    <>
      <section className="container__cards flex__sp-center">
        {destination?.places?.map((tour) => (
          <TourCard key={tour.placeId} tour={tour} />
        ))}
      </section>
    </>
  );
};
