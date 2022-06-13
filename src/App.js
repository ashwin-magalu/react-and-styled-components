import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import GlobalStyle from "./globalStyles";
import { sliderData } from "./data/SliderData";
import DropDown from "./components/DropDown";
import { useState } from "react";
import IntroSection from "./components/IntroSection";
import { IntroData1, IntroData2 } from "./data/IntroData";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Router>
        <NavBar toggle={toggle} />
        <DropDown isOpen={isOpen} toggle={toggle} />
        <Hero slides={sliderData} />
        <IntroSection {...IntroData1} />
        <IntroSection {...IntroData2} />
      </Router>
    </>
  );
}

export default App;
