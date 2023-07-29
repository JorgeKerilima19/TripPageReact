import { useContext } from "react";
import { TourContext } from "../context/tourContext";

const TourInfo = () => {
  const { tour, tourEntries } = useContext(TourContext);

  return (
    <section className="flex flex__column flex__item-center flex__gap-bg width__80">
      <div className="flex flex__column flex__gap-md">
        <h2>
          {tour.name}
          <span> {tour.pricePerPerson}</span>
          <span>/per Person</span>
        </h2>
        <p className="tour-info__body">{tour.about}</p>
      </div>
      <ul className="flex flex__column width__full flex__gap-md">
        {Object.entries(tourEntries).map(([key, value], index) => {
          return (
            <li key={index} className="tour-info__item">
              <h3>{key}</h3>
              {typeof value === "object" ? (
                <span>
                  {Object.entries(value).map(([subKey, subValue]) => (
                    <p key={subKey}>
                      {subKey}: {String(subValue)}
                    </p>
                  ))}
                </span>
              ) : (
                <div>
                  <span>{value}</span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
      <div>Photos</div>
    </section>
  );
};

export default TourInfo;
