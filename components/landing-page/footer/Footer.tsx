import Link from "next/link";
import React from "react";
import Logo from "../../../shared/logo/Logo";
// import Logo from "../../../shared/logo/Logo";

const Footer = () => {
  return (
    <footer className="text-white p-5">
      <div className="flex flex-col justify-center items-center">
        <Logo lg={10} sm={50} />
        <div className="text-neutral-400 text-center">
          You can always chat with us Online 24/7 support
        </div>
        <div className="opacity-50">
          © Coinvestar {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
