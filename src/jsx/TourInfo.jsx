import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import backToTop from "../helpers/functions/backToTop";

const TourInfo = ({ tour }) => {
  const [price, setPrice] = useState(0);

  const getDiscount = () => {
    if (tour.discount) {
      let totalDiscount = tour.pricePerPerson * (tour.discountAmount / 100);
      let finalAmount = tour.pricePerPerson - totalDiscount;
      setPrice(finalAmount);
    } else {
      setPrice(tour.pricePerPerson);
    }
  };

  useEffect(() => {
    getDiscount();
  }, [tour]);

  return (
    <section className="tour__info width__70 flex__container">
      <div className="flex flex__sp-btw flex__wrap tour__offer-container">
        <h3 className="section__title">{tour.name}</h3>
        <div className="ps__relative">
          {tour.discount ? (
            <>
              <span className="tour__price-original">
                ${tour.pricePerPerson}
              </span>
              <span className="tour__offer">{tour.discountAmount}%</span>
            </>
          ) : (
            ""
          )}
          <span className="tour__price-final font__wg-600">${price}</span>
          <span>/per person</span>
        </div>
      </div>
      <img className="tour__banner" src={tour.photos[3]} alt="" />
      <p className="tour-info__body">{tour.about}</p>
      <button className="center card__button-full">
        <Link
          onClick={() => {
            backToTop(350);
          }}
          to={`./${tour.placeId}`}
        >
          See More
        </Link>
      </button>
    </section>
  );
};

export default TourInfo;
