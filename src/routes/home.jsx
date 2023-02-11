import { Destinations as data } from "../data/destination";

import HeroImage from "../jsx/HeroImage";
import Destinations from "../jsx/Destination";

export default function Home() {
  console.log(data);
  return (
    <>
      <HeroImage src={"Home"}></HeroImage>
      <h2>Popular Destinations</h2>
      <section className="card-container">
        {data.map((item)=>{
          return(
            <Destinations item={item}></Destinations>
          )
        })}
      </section>
    </>
  );
}
