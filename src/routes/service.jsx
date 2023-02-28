import HeroImage from "../jsx/HeroImage";
import Footer from "../jsx/Footer";
import Destinations from "../jsx/Destination";

import { Destinations as data } from "../data/destination";

export default function Services() {
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
      <Footer />
    </>
  );
}
