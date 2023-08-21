import HeroImage from "../jsx/HeroImage";
import Destinations from "../jsx/Destination";

import { Destinations as data } from "../helpers/data/destination";
import ServicesSlider from "../jsx/ServicesSlider";

import "../styles/service.css";
import CEO from "../jsx/CEO";

export function Services() {
  return (
    <>
      <HeroImage src={"Service"} />
      <div className="section__container flex__gap-bg pd-bg">
        <h2 className="section-title">Countries To visit</h2>
        <section className="homepage__destinations">
          {data.map((item, index) => {
            return <Destinations key={index} item={item} />;
          })}
        </section>
        <h2 className="section-title">Popular Destinations</h2>
        <ServicesSlider />
        <h2></h2>
        <CEO />
      </div>
    </>
  );
}
