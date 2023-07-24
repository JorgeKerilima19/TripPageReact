import { useContext } from "react";
import { TourContext } from "../../context/tourContext";

export const Information = () => {
  const { destination } = useContext(TourContext);

  return (
    <>
      <div className="section__container flex__gap-sm width__60">
        <h3 className="section__title">About {destination.name}</h3>
        <p className="section__content tour__description  ">
          {destination.about}
        </p>
        <div>About our tours to be</div>
        <div>Popular tours</div>
        <div>About our guides</div>
        <div>blog+newsLetter</div>
        <div>reviews</div>
      </div>
    </>
  );
};
