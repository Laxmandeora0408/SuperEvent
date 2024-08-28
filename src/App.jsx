import React from "react";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import AddsSection from "./components/AddsSection";
import Section from "./components/Section";
import FaqPage from "./components/FaqPage";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll";

function App() {
  return (
    <div>
      <Navbar />
      <PricingSection />
      <Scroll />
      <AddsSection />
      <Section />
      <FaqPage />
      <Footer />
    </div>
  );
}

export default App;
