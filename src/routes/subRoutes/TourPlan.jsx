import { useContext } from "react";
import { TourContext } from "../../context/tourContext";

export const TourPlan = () => {
  const { tour } = useContext(TourContext);

  return (
    <section>
      {tour?.tourPlan?.map((visit, index) => (
        <div key={index}>
          <h3>{visit[`Day ${index + 1}`]}</h3>
          <p>{visit.description}</p>
          <ul>
            {Object.entries(visit.steps).map(([stepNumber, stepText]) => (
              <li key={stepNumber}>{stepText}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};
