import React from "react";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import MinimalFooter from "../components/shared/MinimalFooter/MinimalFooter";
import Hero from "../components/modules/Hero/Hero";
import PortfolioCard from "../components/modules/PortfolioCard/PortfolioCard";
import Skills from "../components/modules/Skills/Skills";
import Portfolio from "../components/modules/Portfolio/Portfolio";
import ContactForm from "../components/modules/Contact/ContactForm";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PortfolioCard />
      <Skills />
      <Portfolio />
      <ContactForm />
      <Footer />
      <MinimalFooter />
    </div>
  );
}

export default Home;
