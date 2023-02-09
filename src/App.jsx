import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./jsx/navbar";
import HamburgerMenu from "./jsx/HamburgerMenu";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Services from "./routes/service";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function setOpen() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <>
      <header className="header">
        <BrowserRouter>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Contact />} />
            <Route path="/contact" element={<Services/>} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <HamburgerMenu isOpen={isOpen} setOpen={setOpen} />
        <Navbar isOpen={isOpen} />
      </header>
      <main className="main">
      </main>
    </>
  );
}

export default App;
