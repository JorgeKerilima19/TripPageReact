import { Destinations as data } from "../helpers/data/destination";

import HeroImage from "../jsx/HeroImage";
import Destinations from "../jsx/Destination";

import "../index.css";

export function Home() {
  return (
    <>
      <HeroImage src={"Home"} />
      <h2 className="section-title">Popular Destinations</h2>
      <div className="flex flex__column flex__item-center">
        <section className="container__cards flex__sp-center width__90">
          {data.map((item, index) => {
            return <Destinations key={index} item={item} />;
          })}
        </section>
      </div>
    </>
  );
}
