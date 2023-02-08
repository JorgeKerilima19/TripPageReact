import Navbar from "./jsx/navbar";
import React,{useState} from "react";


function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="header">
      <div className="hamburger-btn" onClick={()=>{
        setIsOpen(true)
      }}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
        <Navbar isOpen={isOpen} onChange={setIsOpen}></Navbar>
    </header>
  );
}

export default App;
