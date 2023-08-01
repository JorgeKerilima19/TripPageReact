import { useContext } from "react";
import { TourContext } from "../../context/tourContext";

export const TourLocation = () => {
  const { tour } = useContext(TourContext);
  return (
    <>
      <h2 className="section__title">Location</h2>
      <iframe
        src={tour.map}
        className="tour__map"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <article className="flex flex__column flex__gap-bg">
        <header className="section__subtitle">About the Place</header>
        <p className="tour-info__body pd-bottom__bg">{tour.history}</p>
      </article>
    </>
  );
};
