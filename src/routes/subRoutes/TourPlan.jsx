import { useContext } from "react";
import { TourContext } from "../../context/tourContext";

export const TourPlan = () => {
  const { tour } = useContext(TourContext);

  return (
    <section className="width__80 pd-top__bg">
      {tour?.tourPlan?.map((visit, index) => (
        <div
          key={index}
          className="flex flex__column flex__gap-sm pd-bg ps__relative"
        >
          <h3>{visit[`Day ${index + 1}`]}</h3>
          <p className="tour-info__body">{visit.description}</p>
          <ul className="pd-sm">
            {Object.entries(visit.steps).map(([stepNumber, stepText]) => (
              <li className="tour-info__body-sm" key={stepNumber}>
                {stepText}
              </li>
            ))}
          </ul>
          <div className="tour-info__number flex__container-center">
            <span>{index + 1}</span>
          </div>
            <span className="line"></span>
        </div>
      ))}
    </section>
  );
};
