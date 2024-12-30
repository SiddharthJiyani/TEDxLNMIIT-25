import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import Team from "./Components/Team/Team.jsx";
import Partner from "./Components/Partner/Partner.jsx";
import Gallery from "./Components/Gallery/Gallery.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import TicketsPage from "./Components/TicketsPage/TicketsPage.jsx";
import CampusAmb from "./Components/CampusAmb/CampusAmb.tsx";

export default function App() {
  return (
    <Router>
      <div className="w-full h-full font-generalSans bg-black pt-1 backdrop-blur-md">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booktickets" element={<TicketsPage />} />
        
          <Route path="/campus-amb" element={<CampusAmb />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
