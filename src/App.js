import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import LandingPage from "./pages/LandingPage";
import GeneratePage from "./pages/GeneratePage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="generate" element={<GeneratePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
