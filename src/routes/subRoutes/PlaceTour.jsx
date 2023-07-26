import { useParams } from "react-router-dom";


export const PlaceTour = () => {
  const { tourId } = useParams();
  
  
  return <div>PlaceTour {tour.tourId}</div>;
};
