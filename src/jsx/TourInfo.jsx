import { useContext } from "react";
import { TourContext } from "../context/tourContext";

const TourInfo = () => {
  const { tour, tourEntries } = useContext(TourContext);

  return (
    <section>
      <div>
        <h2>
          {tour.name}
          <span> {tour.pricePerPerson}</span>
          <span>/per Person</span>
        </h2>
        <p>{tour.about}</p>
      </div>
      <div>
        {Object.entries(tourEntries).map(([key, value], index) => {
          return (
            <div key={index}>
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
                <span>{value}</span>
              )}
            </div>
          );
        })}
      </div>
      <div>Photos</div>
    </section>
  );
};

export default TourInfo;
