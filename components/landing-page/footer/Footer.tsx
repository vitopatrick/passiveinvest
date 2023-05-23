import React from "react";
import CompanyFooter from "./CompanyFooter";
import Payment from "./Payment";

const Footer = () => {
  return (
    <footer>
      {/* payment logos */}
      <Payment />
      {/* end of payment logos */}
      {/* companies footer */}
      <CompanyFooter />
      {/* end of companies footer */}
    </footer>
  );
};

export default Footer;
