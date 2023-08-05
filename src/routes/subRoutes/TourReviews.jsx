import { useContext } from "react";
import { TourContext } from "../../context/TourContext";
import OpinionCard from "../../jsx/OpinionCard";

export const TourReviews = () => {
  const { tour } = useContext(TourContext);
  return (
    <>
      <h2>Tour Reviews and Scores</h2>
      <p className="tour-info__body">
        This is what people have to say about the tour and place, feel free to
        share your opinion with honesty and help us to improve our service and
        our connections.
      </p>
      <section>
        <div>
          <h3>8.3</h3>
          <span>😎Super</span>
        </div>
        <div>General Reviews</div>
      </section>
      <section>
        {tour?.reviews?.map((el) => (
          <OpinionCard key={el.id} el={el} arr={el.rates} />
        ))}
      </section>
    </>
  );
};
