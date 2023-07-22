import { TourContext } from "./tourContext";
import { useState } from "react";

const TourContextProvider = ({ children }) => {
  const [destination, setDestination] = useState("");

  const getData = async (destination) => {
    const res = await fetch(
      `../../resources/api/dataDetails/${destination}.json`
    );
    const data = await res.json();

    return data;
  };

  return (
    <TourContext.Provider value={{ getData, destination, setDestination }}>
      {children}
    </TourContext.Provider>
  );
};

export default TourContextProvider;
