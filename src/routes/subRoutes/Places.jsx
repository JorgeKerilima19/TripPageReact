import Destinations from "../../jsx/Destination";

export const Places = ({ destination }) => {
  console.log(destination);
  return (
    <section className="card__container-md">
      <Destinations item={destination} />
    </section>
  );
};
