import { useContext, useEffect, useState } from "react";
import { TourContext } from "../../context/TourContext";
import OpinionCard from "../../jsx/OpinionCard";

export const TourReviews = () => {
  const { tour } = useContext(TourContext);
  const [hotelPoints, setHotelPoints] = useState(0);
  const [mealPoints, setMealPoints] = useState(0);
  const [transportPoints, setTransportPoints] = useState(0);
  const [overAll, setOverAll] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    if (tour) {
      let totalHotelPoints = 0;
      let totalMealPoints = 0;
      let totalTransportPoints = 0;
      let totalOverAllPoints = 0;

      tour?.reviews?.forEach((el) => {
        Object.entries(el.rates).forEach(([key, value]) => {
          if (key === "hotel") {
            totalHotelPoints += value;
          } else if (key === "meals") {
            totalMealPoints += value;
          } else if (key === "transportation") {
            totalTransportPoints += value;
          } else if (key === "overall") {
            totalOverAllPoints += value;
          }
        });
      });

      setHotelPoints(totalHotelPoints / tour.reviews.length);
      setMealPoints(totalMealPoints / tour.reviews.length);
      setTransportPoints(totalTransportPoints / tour.reviews.length);
      setOverAll(totalOverAllPoints / tour.reviews.length);
      setTotalPoints(
        (totalHotelPoints +
          totalMealPoints +
          totalTransportPoints +
          totalOverAllPoints) /
          4
      );
    }
  }, [tour]);

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
          <h3>{totalPoints}</h3>
          <span>{totalPoints > 6 ? "😁" : totalPoints > 5 ? "🙂" : "🙄"}</span>
        </div>
        <div>Hotel {hotelPoints}</div>
        <div>Meals {mealPoints}</div>
        <div>transportation {transportPoints}</div>
        <div>overAll {overAll}</div>
      </section>
      <section className="flex__container">
        <h3>This is what people have to say about the tour</h3>
        {tour?.reviews?.map((el) => (
          <OpinionCard key={el.id} el={el} arr={el.rates} />
        ))}
      </section>
    </>
  );
};
