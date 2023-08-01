import { useContext, useEffect, useState } from "react";
import { TourContext } from "../../context/tourContext";
import { Outlet, useParams } from "react-router-dom";
import SubNavbar from "../../jsx/SubNavbar";

export const PlaceTour = () => {
  const { getData, tour, setTour, setTourEntries } = useContext(TourContext);
  const { id, placeId } = useParams();

  useEffect(() => {
    const getTourInfo = async () => {
      const data = await getData(id);
      setTour(data.places[placeId - 1]);
      setTourEntries(data.places[placeId - 1].tourInfo);
    };
    getTourInfo();
  }, []);

  return (
    <>
      <div
        className="banner__md flex__container-center"
        style={{ backgroundImage: `url(${tour.banner})` }}
      >
        <h2>{tour.name}</h2>
        <SubNavbar />
      </div>
      <section className="section__container flex__gap-bg width__80 mg-both__bg">
        <Outlet />
      </section>
    </>
  );
};
