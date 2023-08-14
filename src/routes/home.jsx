import { Destinations as data } from "../helpers/data/destination";

import HeroImage from "../jsx/HeroImage";
import Destinations from "../jsx/Destination";

import "../index.css";
import Features from "../jsx/Features";
import CustomerReview from "../jsx/CustomerReview";
import Newsletter from "../jsx/Newsletter";

export function Home() {
  return (
    <>
      <HeroImage src={"Home"} />
      <h2 className="section-title">Countries To Visit</h2>
      <div className="flex flex__column flex__item-center flex__gap-bg pd-sm">
        <section className="homepage__destinations">
          {data.map((item, index) => {
            return <Destinations key={index} item={item} />;
          })}
        </section>
        <section className="flex__container flex__item-center width__full">
          <h4 className="section-title">The Sky Travel Experience</h4>
          <Features />
        </section>
        <section className="flex__container flex__item-center width__full">
          <h4 className="section-title">What Our Customers Have To Say </h4>
          <CustomerReview />
        </section>
        <Newsletter />
      </div>
    </>
  );
}
