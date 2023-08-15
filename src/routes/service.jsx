import HeroImage from "../jsx/HeroImage";
import Destinations from "../jsx/Destination";

import { Destinations as data } from "../helpers/data/destination";

export function Services() {
  return (
    <>
      <HeroImage src={"Service"} />
      <h2 className="section-title">Popular Destinations</h2>
      <div className="flex flex__column flex__item-center pd-bg mg-bottom__bg ">
        <section className="homepage__destinations">
          {data.map((item, index) => {
            return <Destinations key={index} item={item} />;
          })}
        </section>
      </div>
    </>
  );
}
