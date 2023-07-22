import HeroImage from "../jsx/HeroImage";
import Destinations from "../jsx/Destination";

import { Destinations as data } from "../../resources/api/destination.js";

export function Services() {
  return (
    <>
      <HeroImage src={"Service"} />
      <h2 className="section-title">Popular Destinations</h2>
      <div className="first-container">
        <section className="card-container">
          {data.map((item, index) => {
            return <Destinations key={index} item={item} />;
          })}
        </section>
      </div>
    </>
  );
}
