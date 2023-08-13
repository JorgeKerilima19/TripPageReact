import { Destinations as data } from "../helpers/data/destination";

import HeroImage from "../jsx/HeroImage";
import Destinations from "../jsx/Destination";

import "../index.css";
import Features from "../jsx/Features";

export function Home() {
  return (
    <>
      <HeroImage src={"Home"} />
      <h2 className="section-title">Popular Destinations</h2>
      <div className="flex flex__column flex__item-center flex__gap-bg pd-sm mg-bottom__bg">
        <section className="homepage__destinations">
          {data.map((item, index) => {
            return <Destinations key={index} item={item} />;
          })}
        </section>
        <section className="flex__container flex__item-center width__full">
          <h4 className="section__title">The Sky Travel Experience</h4>
          <Features />
        </section>
      </div>
    </>
  );
}
