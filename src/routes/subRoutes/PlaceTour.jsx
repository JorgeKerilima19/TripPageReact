import { useContext, useEffect, useState } from "react";
import { TourContext } from "../../context/tourContext";
import { useParams } from "react-router-dom";

export const PlaceTour = () => {
  const [tour, setTour] = useState("");
  const { getData } = useContext(TourContext);
  const { id, placeId } = useParams();

  useEffect(() => {
    const getTourInfo = async () => {
      const data = await getData(id);
      setTour(data.places[placeId-1]);
      console.log(tour);
    };
    getTourInfo();
  }, []);

  return <div>PlaceTour {tour.name}</div>;
};
