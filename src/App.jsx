import Navbar from "./jsx/navbar";
import React,{useState} from "react";


function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="header">
      <Navbar></Navbar>
    </header>
  );
}

export default App;
