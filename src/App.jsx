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
} from "./routes/subRoutes";

import Navbar from "./jsx/Navbar";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />
          <Route path="/service/:id" element={<TourPage />}>
            <Route index element={<Information />} />
            <Route path=":placeId" element={<PlaceTour />}>
              <Route index path="" element={<TourInfo />} />
              <Route path="tourPlan" element={<TourPlan />} />
              <Route path="location" element={<TourLocation />} />
              <Route path="gallery" element={<TourGallery />} />
              <Route path="reviews" element={<TourReviews />} />
            </Route>
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/pay" element={<PayPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
