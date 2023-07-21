import { Routes, Route } from "react-router-dom";

import { Home, About, Contact, Register, Services, TourPage } from "./routes";

import Navbar from "./jsx/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />
          <Route path="/service/:id" element={<TourPage />}>
            <Route path="places" element={<div>Place Pages</div>} />
            <Route path="information" element={<div>Info Page</div>} />
          </Route>
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
