import { useContext } from "react";
import { TourContext } from "../../context/TourContext";
import { Places } from "../../jsx/Places";

export const Information = () => {
  const { destination } = useContext(TourContext);

  return (
    <>
      <div className="section__container flex__gap-bg width__90">
        <h3 className="section__title">About {destination.name}</h3>
        <p className="section__content tour__description  ">
          {destination.about}
        </p>
        <Places />
        <div>About our tours to be</div>
        <div>Popular tours</div>
        <div>About our guides</div>
        <div>blog+newsLetter</div>
        <div>reviews</div>
      </div>
    </>
  );
};
