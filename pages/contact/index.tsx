import React from "react";
import Navbar from "../../components/landing-page/nav-bar/navbar";
import Footer from "../../components/landing-page/footer/Footer";
import Contact from "../../components/contact/Contact";

const ContactUsPage = () => {
  return (
    <div className="bg-bg">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
