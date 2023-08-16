import { useContext } from "react";
import { TourContext } from "../context/TourContext";

import "../styles/payPage.css";

export const PayPage = () => {
  const { wishList } = useContext(TourContext);
  console.log(wishList);

  return (
    <section className="section__pay">
      {wishList.length > 0 ? (
        <div>Loading</div>
      ) : (
        <div>No Items in the Cart</div>
      )}
    </section>
  );
};
