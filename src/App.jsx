// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Team from "./Components/Team/Team.jsx";
import Partner from "./Components/Partner/Partner.jsx";
import Gallery from "./Components/Gallery/Gallery.jsx";
import Faq from "./Components/FAQ/Faq.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Particle from "./Particle.jsx";

export default function App() {
  return ( 
    <Router>
      <div className="w-full overflow-y-auto font-generalSans  bg-customDark backdrop-blur-md relative ">
        <Navbar />
        <Particle />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}

          <Route path="/team" element={<Team />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/gallery" element={<Gallery />} />

          {/* <Route path="/faq" element={<Faq />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
