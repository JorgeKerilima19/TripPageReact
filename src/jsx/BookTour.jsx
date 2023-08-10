import { useContext } from "react";
import { TourContext } from "../context/TourContext";

const requiredInfo = [
  "Name",
  "Last name",
  "Email",
  "Birth data",
  "Phone",
  "Total Tickets",
];

const BookTour = () => {
  const { tour, wishList, setWishList } = useContext(TourContext);

  const addToCart = (e) => {
    e.preventDefault();
  };

  return (
    <aside className="aside flex__container-center flex__gap-bg">
      <h3 className="section__title">Book This Tour</h3>
      <form
        onSubmit={addToCart}
        className="pd-sm flex flex__column flex__gap-md width__90"
      >
        {requiredInfo.map((el) => (
          <div
            key={el}
            className="form__container-input flex__wrap flex__gap-sm"
          >
            <label htmlFor={el} className="form__label">
              {el}
            </label>
            <input type="text" className="form__input pd-left__sm" />
          </div>
        ))}
        <div className="form__container-input flex__wrap flex__gap-sm">
          <label htmlFor="Message" className="form__label">
            Message
          </label>
          <textarea className="form__textarea" name="text"></textarea>
        </div>
        <button className="form__button" type="submit">
          See Availability
        </button>
      </form>
    </aside>
  );
};

export default BookTour;
