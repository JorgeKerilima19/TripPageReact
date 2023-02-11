import HeroImage from "../jsx/HeroImage";
import Destinations from "../jsx/Destination";

export default function Home() {
  return (
    <>
      <HeroImage src={"Home"}></HeroImage>
      <h2>{"Popular Destinations"}</h2>
      <Destinations></Destinations>
    </>
  );
}
