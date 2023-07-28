import { useContext, useEffect, useState } from "react";
import { TourContext } from "../../context/tourContext";
import { Outlet, useParams } from "react-router-dom";
import SubNavbar from "../../jsx/SubNavbar";

export const PlaceTour = () => {
  const [tour, setTour] = useState("");
  const { getData } = useContext(TourContext);
  const { id, placeId } = useParams();

  useEffect(() => {
    const getTourInfo = async () => {
      const data = await getData(id);
      setTour(data.places[placeId - 1]);
    };
    getTourInfo();
  }, []);

  return (
    <>
      <div
        className="banner__md flex__container-center"
        style={{ backgroundImage: `url(${tour.banner})` }}
      >
        <h2>PlaceTour {tour.name}</h2>
        <SubNavbar />
      </div>
      <Outlet />
    </>
  );
};
