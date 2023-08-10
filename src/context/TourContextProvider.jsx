import { TourContext } from "./TourContext";
import { useState } from "react";

const TourContextProvider = ({ children }) => {
  const [destination, setDestination] = useState("");
  const [tour, setTour] = useState("");
  const [tourEntries, setTourEntries] = useState("");
  const [wishList, setWishList] = useState([]);

  const getData = async (destination) => {
    const res = await fetch(`/resources/api/${destination}.json`);
    const data = await res.json();

    return data;
  };

  return (
    <TourContext.Provider
      value={{
        getData,
        destination,
        setDestination,
        tour,
        setTour,
        tourEntries,
        setTourEntries,
        wishList,
        setWishList,
      }}
    >
      {children}
    </TourContext.Provider>
  );
};

export default TourContextProvider;
