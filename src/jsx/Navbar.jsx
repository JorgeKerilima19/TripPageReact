import "../index.css";
import "../styles/navbarStyle.css";

import { Outlet, NavLink, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { IoIosCart } from "react-icons/io";
import { TourContext } from "../context/TourContext";

import img from "../assets/socialLogo.svg";

import HamburgerMenu from "../jsx/HamburgerMenu";
import Footer from "../jsx/Footer";
import backToTop from "../helpers/functions/backToTop";

export const NavItems = [
  {
    title: "Home",
    name: "Sky Travel",
    textDescription: "A New Sky, A New Life.",
    url: "/",
    className: "svg-holder-image",
    image:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    classNameImage: "",
  },
  {
    title: "About",
    name: "Who are we?",
    url: "/about",
    className: "svg-holder-image",
    image:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    classNameImage: "hero-section-small",
  },
  {
    title: "Service",
    name: "Our Destinations",
    url: "/service",
    className: "svg-holder-image",
    image:
      "https://images.unsplash.com/photo-1476067897447-d0c5df27b5df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    classNameImage: "hero-section-small",
  },
  {
    title: "Contact",
    name: "Need Help?",
    url: "/contact",
    className: "svg-holder-image",
    image:
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    classNameImage: "hero-section-small",
  },
  {
    title: "Register",
    name: "Sign In",
    url: "/register",
    className: "svg-holder-image",
    image:
      "https://images.unsplash.com/photo-1597667554307-885851e705c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    classNameImage: "hero-section-small",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { wishList, addToCart, removeFromCart } = useContext(TourContext);
  const setOpen = () => {
    setIsOpen((isOpen) => !isOpen);
    backToTop();
  };
  const handleCart = () => {
    setOpenCart((openCart) => !openCart);
  };

  return (
    <>
      <header className="header">
        <HamburgerMenu isOpen={isOpen} setOpen={setOpen} />
        <nav className="nav">
          <img src={img} className="nav-logo" alt="logo" />
          <ul className={`navbar ${isOpen}`}>
            {NavItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className="navbar-item flex flex__item-center flex__sp-center"
                >
                  <NavLink
                    className={(className) =>
                      className.isActive ? "item-link active-link" : "item-link"
                    }
                    to={item.url}
                    onClick={setOpen}
                  >
                    <span className="item-link_text">{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="cart__container">
          <IoIosCart onClick={handleCart} className="cart__icon" />
          {wishList.length > 0 ? (
            <span className="cart__number">{wishList.length}</span>
          ) : (
            ""
          )}
          <div
            className={`flex flex__column flex__gap-bg cart__list ${
              openCart ? "displayed" : ""
            }`}
          >
            <h4 className="section__subtitle">Your Cart</h4>
            <div className="flex__list flex__column">
              {wishList.length <= 0 ? (
                <span>Your Cart is Empty</span>
              ) : (
                <ul className="flex__list flex__column flex__gap-md">
                  {wishList.map((el) => (
                    <li
                      className="pd-sm cart__item flex flex__column flex__gap-sm"
                      key={el.name}
                    >
                      <div className="flex flex__item-center flex__sp-btw flex__gap-md">
                        <img
                          className="cart__item-img"
                          src={el.banner}
                          alt="element__img"
                        />
                        <div className="flex flex__column flex__item-end">
                          <span>{el.name}</span>
                          <span className="color__tertiary font__1-1">
                            ${el.pricePerPerson}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          removeFromCart(el);
                        }}
                        className="button__remove"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="cart__info-container flex flex__sp-btw flex__item-center">
              <span>Total:240 $</span>
              <button className="button__pay">
                <Link>Proceed to Pay</Link>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="main__column">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
