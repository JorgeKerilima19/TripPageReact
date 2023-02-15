import { Destinations as data } from "../data/destination";

import HeroImage from "../jsx/HeroImage";
import Destinations from "../jsx/Destination";
import Footer from "../jsx/Footer";

export default function Home() {
  return (
    <>
      <HeroImage src={"Home"} />
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
