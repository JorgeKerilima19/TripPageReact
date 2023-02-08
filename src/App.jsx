import Navbar from "./jsx/navbar";
import React,{useState} from "react";


function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="header">
      <Navbar></Navbar>
      <div className="hamburger-btn">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

export default App;
