import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./jsx/navbar";
import HamburgerMenu from "./jsx/HamburgerMenu";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Services from "./routes/service";
import Register from "./routes/register";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function setOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <BrowserRouter>
        <header className="header">
          <Navbar isOpen={isOpen} setOpen={setOpen} />

          <HamburgerMenu isOpen={isOpen} setOpen={setOpen} />
        </header>
        <main className="main__column">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Services />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
