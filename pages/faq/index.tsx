import React from "react";
import Faq from "../../components/landing-page/faq/frequently-asked-questions";
import Navbar from "../../components/landing-page/nav-bar/navbar";
import Footer from "../../components/landing-page/footer/Footer";

const FaqPage = () => {
  return (
    <div className="bg-bg">
      <Navbar />
      <Faq />
      <Footer />
    </div>
  );
};

export default FaqPage;
