import { TourContext } from "./TourContext";
import { useEffect, useState } from "react";

const TourContextProvider = ({ children }) => {
  const [destination, setDestination] = useState("");
  const [tour, setTour] = useState("");
  const [tourEntries, setTourEntries] = useState("");
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("whishList")) || []
  );

  const getData = async (destination) => {
    const res = await fetch(`/resources/api/${destination}.json`);
    const data = await res.json();

    return data;
  };

  const addToCart = (toAdd) => {
    const exists = wishList.some((item) => item.name === toAdd.name);
    const newItem = { ...toAdd, url: window.location.pathname };

    if (!exists) {
      setWishList((prevItems) => [...prevItems, newItem]);
      localStorage.setItem("whishList", JSON.stringify([...wishList, newItem]));
    }
  };

  const removeFromCart = (toRemove) => {
    setWishList((prevItems) =>
      prevItems.filter((item) => item.name !== toRemove.name)
    );
    localStorage.setItem(
      "whishList",
      JSON.stringify(wishList.filter((item) => item.name !== toRemove.name))
    );
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
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </TourContext.Provider>
  );
};

export default TourContextProvider;
