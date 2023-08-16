import { useContext } from "react";
import { TourContext } from "../context/TourContext";
import { Link } from "react-router-dom";

import { IoIosCart, IoIosInformationCircle } from "react-icons/io";

import "../styles/payPage.css";

export const PayPage = () => {
  const { wishList } = useContext(TourContext);
  console.log(wishList);

  return (
    <section className="section__pay flex pd-bg">
      {wishList.length > 0 ? (
        <div>Loading</div>
      ) : (
        <div className="flex__container width__full">
          <div className="flex flex__gap-md flex__item-center">
            <IoIosCart className="pay__svg-cart" />
            <span className="font__1-1">Cart {wishList.length} items</span>
          </div>
          <div className="pay__empty-container flex flex__gap-md flex__item-center flex__wrap">
            <div className="pay__svg-container flex__container-center">
              <IoIosInformationCircle className="pay__svg-info" />
            </div>
            <div>
              <h4>Your Cart Is Empty</h4>
              <p>
                Take a look at our services{" "}
                <Link className="newsletter__font-a" to="/service">
                  here.
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
