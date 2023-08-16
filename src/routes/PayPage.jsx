import { useContext } from "react";
import { TourContext } from "../context/TourContext";
import { Link } from "react-router-dom";

import {
  IoIosCart,
  IoIosInformationCircle,
  IoIosReturnLeft,
  IoIosTrash,
} from "react-icons/io";

import "../styles/payPage.css";

export const PayPage = () => {
  const { wishList, removeFromCart } = useContext(TourContext);

  return (
    <section className="section__pay flex pd-bg flex__container">
      <div className="flex flex__gap-md flex__item-center">
        <IoIosCart className="pay__svg-cart" />
        <span className="font__1-1">
          Cart{" "}
          <span className="color__tertiary font__1-2 font__wg-600">
            {wishList.length}
          </span>{" "}
          items
        </span>
      </div>

      <div className="flex__container width__full">
        <ul className="pay__empty-container flex__list flex__container flex__wrap">
          {wishList.length > 0 ? (
            <>
              {wishList.map((el, index) => (
                <li key={index} className="flex flex__gap-md flex__item-center">
                  <span className="font__1-2">{index + 1}</span>
                  <div
                    className="pd-sm cart__item flex flex__sp-btw flex__item-center flex__gap-sm width__full flex__wrap"
                    key={el.name}
                  >
                    <div className="flex flex__item-center flex__gap-md">
                      <img
                        className="cart__item-img"
                        src={el.banner}
                        alt="element__img"
                      />

                      <span className="font__wg-600">{el.name}</span>
                    </div>
                    <span className="color__secondary font__1-1 font__wg-600">
                      ${el.pricePerPerson} x <span>{el.tickets}</span>
                    </span>
                    <span className="color__tertiary font__1-1 font__wg-600">
                      {el.tickets * el.pricePerPerson}
                    </span>
                    <div></div>
                    <div className="flex flex__gap-md">
                      <IoIosTrash
                        onClick={() => {
                          removeFromCart(el);
                        }}
                      />
                      <Link to={el.url}>
                        <IoIosReturnLeft />
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </>
          ) : (
            <li className="flex flex__gap-md flex__item-center">
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
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};
