import { Routes, Route } from "react-router-dom";

import {
  Home,
  About,
  Contact,
  Register,
  Services,
  TourPage,
  PayPage,
} from "./routes";
import {
  Information,
  PlaceTour,
  TourGallery,
  TourInfo,
  TourLocation,
  TourPlan,
  TourReviews,
} from "./routes/tourRoute";

import Navbar from "./jsx/Navbar";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/TripPageReact/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/TripPageReact/about" element={<About />} />
          <Route path="/TripPageReact/contact" element={<Contact />} />
          <Route path="/TripPageReact/service" element={<Services />} />
          <Route path="/TripPageReact/service/:id" element={<TourPage />}>
            <Route index element={<Information />} />
            <Route path=":placeId" element={<PlaceTour />}>
              <Route index path="" element={<TourInfo />} />
              <Route path="tourPlan" element={<TourPlan />} />
              <Route path="location" element={<TourLocation />} />
              <Route path="gallery" element={<TourGallery />} />
              <Route path="reviews" element={<TourReviews />} />
            </Route>
          </Route>
          <Route path="/TripPageReact/register" element={<Register />} />
          <Route path="/TripPageReact/pay" element={<PayPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
