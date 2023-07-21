import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import "../styles/tourPage.css";
import SubNavbar from "../jsx/SubNavbar";

export function TourPage() {
  const [destination, setDestination] = useState("");
  const { id } = useParams();

  const getData = async (destination) => {
    const res = await fetch(
      `../../resources/api/dataDetails/${destination}.json`
    );
    const data = await res.json();

    return data;
  };

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
  }, []);

  return (
    <section className="flex__container">
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