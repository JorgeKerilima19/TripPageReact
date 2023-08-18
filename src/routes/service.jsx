import HeroImage from "../jsx/HeroImage";
import Destinations from "../jsx/Destination";

import { Destinations as data } from "../helpers/data/destination";
import ServicesSlider from "../jsx/ServicesSlider";

import "../styles/service.css";

export function Services() {
  return (
    <>
      <HeroImage src={"Service"} />
      <h2 className="section-title">Countries To visit</h2>
      <div className="section__container flex__gap-bg pd-bg mg-bottom__bg ">
        <section className="homepage__destinations">
          {data.map((item, index) => {
            return <Destinations key={index} item={item} />;
          })}
        </section>
        <h2 className="section-title">Popular Destinations</h2>
        <ServicesSlider />
      </div>
    </>
  );
}
