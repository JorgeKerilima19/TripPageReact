import { useContext } from "react";
import { TourContext } from "../../context/TourContext";
import { Places } from "../../jsx/Places";
import CustomerReview from "../../jsx/CustomerReview";

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
        <section className="flex__container flex__item-center width__full">
          <h4 className="section-title">What Our Customers Have To Say </h4>
          <CustomerReview elements={2} />
        </section>
        <div>About our guides</div>
        <div>blog+newsLetter</div>
        <div>reviews</div>
      </div>
    </>
  );
};
