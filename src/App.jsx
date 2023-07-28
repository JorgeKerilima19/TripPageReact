import { Routes, Route } from "react-router-dom";

import { Home, About, Contact, Register, Services, TourPage } from "./routes";
import { Information, PlaceTour } from "./routes/subRoutes";

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
              <Route path="tourPlan" element={<div>Hello</div>} />
              <Route path="location" element={<div>Hello</div>} />
              <Route path="gallery" element={<div>Hello</div>} />
              <Route path="reviews" element={<div>Hello</div>} />
            </Route>
          </Route>
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
