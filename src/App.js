import React from "react";
import {Routes, Route} from "react-router-dom";

import Navigation from "./components/Navigation";
import LandingPage from "./pages/LandingPage";
import GeneratePage from "./pages/GeneratePage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <>
            <Navigation/>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="generate" element={<GeneratePage/>}/>
                </Routes>
            </ScrollToTop>
            <Footer/>
        </>
    );
}

export default App;
