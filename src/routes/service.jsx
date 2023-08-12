import HeroImage from "../jsx/HeroImage";
import Destinations from "../jsx/Destination";
import Features from "../jsx/Features";

import { Destinations as data } from "../helpers/data/destination";

export function Services() {
  return (
    <>
      <HeroImage src={"Service"} />
      <h2 className="section-title">Popular Destinations</h2>
      <div className="flex flex__column flex__item-center pd-bg">
        <section className="homepage__destinations">
          {data.map((item, index) => {
            return <Destinations key={index} item={item} />;
          })}
        </section>
        <section className="section__container">
          <h4>We help you to get a better experience</h4>
          <h3>FIND YOUR TRAVEL PERFECTION</h3>
          <Features />
        </section>
      </div>
    </>
  );
}
