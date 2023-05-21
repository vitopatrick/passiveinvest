import React from "react";
import Chart from "../../../shared/charts/Chart";
import { motion } from "framer-motion";
import Logo from "../../../shared/logo/Logo";

const Platform = () => {
  return (
    <div className="mb-10 relative">
      <div className="p-4 opacity-5 top-1/2 left-[30%] absolute text-white text-4xl md:text-8xl font-bold tracking-widest ">
        COINVESTAR
      </div>
      <div className="md:w-[60%] mx-auto">
        <h3 className="text-white underline text-3xl md:text-6xl capitalize text-center font-bold mb-12">
          Easy to Use
        </h3>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.9,
              ease: "easeIn",
            },
          }}
        >
          <Chart />
        </motion.div>
      </div>
    </div>
  );
};

export default Platform;
