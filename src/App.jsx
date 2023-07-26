import { Routes, Route } from "react-router-dom";

import { Home, About, Contact, Register, Services, TourPage } from "./routes";
import { Places, Information, PlaceTour } from "./routes/subRoutes";

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
            <Route path="places" element={<Places />} />
            <Route path="places/:tourId" element={<PlaceTour />} />
          </Route>
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
