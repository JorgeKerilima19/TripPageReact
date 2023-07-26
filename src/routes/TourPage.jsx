import { useEffect, useContext } from "react";
import { Outlet, useParams } from "react-router-dom";

import "../styles/tourPage.css";
import SubNavbar from "../jsx/SubNavbar";
import { TourContext } from "../context/tourContext";

export function TourPage() {
  const { getData, destination, setDestination } = useContext(TourContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(id);
        setDestination(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <section className="flex__container flex__item-center">
      <div
        className="banner flex__container-center flex__gap-md"
        style={{ backgroundImage: `url(${destination.banner})` }}
      >
        <h2>{destination.name}</h2>
        <span>{destination.slogan}</span>
        <SubNavbar />
      </div>
      <Outlet />
    </section>
  );
}
