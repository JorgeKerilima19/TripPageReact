import { Destinations as data } from "../data/destination";

import HeroImage from "../jsx/HeroImage";
import Destinations from "../jsx/Destination";
import RecentTrips from "../jsx/RecentTrips";

export default function Home() {
  return (
    <>
      <HeroImage src={"Home"}></HeroImage>
      <h2 className="section-title">Popular Destinations</h2>
      <section className="card-container">
        {data.map((item, index) => {
          return <Destinations key={index} item={item}></Destinations>;
        })}
      </section>
      <h2>Recent Trips</h2>
      <RecentTrips></RecentTrips>
    </>
  );
}
