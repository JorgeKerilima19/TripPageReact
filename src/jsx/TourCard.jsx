const TourCard = ({ tour }) => {
  return (
    <div className="card__container-md flex flex__column flex__gap-sm flex__item-center">
      <img className="destination-card__img width__90" src={tour.banner} alt="" />
      {tour.name}
    </div>
  );
};

export default TourCard;
