import { FaStar } from "react-icons/fa6";

const OpinionCard = ({ el, arr }) => {
  return (
    <article className="flex flex__gap-md">
      <img className="tour__user-photo" src={el.photo} alt="userPhoto" />
      <div>
        <h2>{el.userName}</h2>
        <p>{el.comment}</p>
        <div className="flex flex__wrap flex__sp-center">
          {Object.entries(arr).map(([key, value], index) => (
            <div
              className="flex flex__gap-sm flex__wrap rating__container"
              key={index}
            >
              <strong>{key}</strong>
              <div className="star__container">
                {[...Array(5)].map((el, index) => (
                  <FaStar
                    key={index}
                    className={`tour__rating-star ${index < value ? "on" : ""}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default OpinionCard;
