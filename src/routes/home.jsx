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
      <div className="flex flex__column flex__item-center pd-bg">
        <section className="container__cards flex__sp-center width__90">
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
