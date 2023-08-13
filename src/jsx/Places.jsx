import { useContext } from "react";

import { TourContext } from "../context/TourContext";
import TourCard from "./TourCard";
import backToTop from "../helpers/functions/backToTop";

export const Places = () => {
  const { destination } = useContext(TourContext);
  return (
    <>
      <section className="container__cards flex__sp-center">
        {destination?.places?.map((tour) => (
          <TourCard
            onclick={() => {
              backToTop(352);
            }}
            key={tour.placeId}
            tour={tour}
          />
        ))}
      </section>
    </>
  );
};
