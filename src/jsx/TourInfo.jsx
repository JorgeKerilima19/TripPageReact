import { useContext } from "react";
import { TourContext } from "../context/tourContext";

const TourInfo = () => {
  const { tour, tourEntries } = useContext(TourContext);

  return (
    <section className="flex flex__column flex__item-center flex__gap-bg width__80">
      <div className="flex flex__column flex__gap-md">
        <h2 className="section__title color__primary">
          {tour.name}
          <span className="color__tertiary"> ${tour.pricePerPerson}</span>
          <span className="tour__price color__tertiary">/per Person</span>
        </h2>
        <p className="tour-info__body">{tour.about}</p>
      </div>
      <ul className="flex flex__column width__full flex__gap-md">
        {Object.entries(tourEntries).map(([key, value], index) => {
          return (
            <li key={index} className="tour-info__item">
              <h3>{key}</h3>
              {typeof value === "object" ? (
                <div className="flex flex__gap-md">
                  <div className="flex flex__column flex__gap-sm width__90">
                    <h4>Included</h4>
                    {Object.entries(value).map(([subKey, subValue]) => {
                      if (subValue) {
                        return (
                          <span key={subKey}>
                            {subKey}
                            <span style={{ color: "green" }}>✔</span>
                          </span>
                        );
                      }
                    })}
                  </div>
                  <div className="flex flex__column flex__gap-sm width__90">
                    <h4>Not Included </h4>
                    {Object.entries(value).map(([subKey, subValue]) => {
                      if (!subValue) {
                        return <span key={subKey}>{subKey} ❌</span>;
                      }
                    })}
                  </div>
                </div>
              ) : (
                <div>
                  <span>{value}</span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
      <h4 className="section__subtitle">Photos</h4>
      <div className="flex flex__gap-sm flex__wrap flex__sp-center">
        {tour?.photos?.map((el) => (
          <img className="tour__photo" key={el} src={el} />
        ))}
      </div>
    </section>
  );
};

export default TourInfo;
