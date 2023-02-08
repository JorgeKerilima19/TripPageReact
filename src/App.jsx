import Navbar from "./jsx/navbar";
import HamburgerMenu from "./jsx/HamburgerMenu";
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function setOpen(){
    setIsOpen(isOpen=>!isOpen)
  }
  return (
    <header className="header">
      <HamburgerMenu isOpen={isOpen} setOpen={setOpen} />
      <Navbar isOpen={isOpen} />
    </header>
  );
}

export default App;
