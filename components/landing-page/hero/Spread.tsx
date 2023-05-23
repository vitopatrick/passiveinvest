import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Spread = () => {
  return (
    <section className="relative">
      {/* container */}
      <div className="w-[80%] md:w-[70%] mx-auto p-3">
        {/* GRID CONTAINER */}
        <div className="grid md:grid-cols-2 gap-6 place-items-center">
          {/* IMG */}
          <motion.div
            initial={{ y: "10px" }}
            animate={{ y: "30px" }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            }}
          >
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/8d29bbfe-0-0pips_10000000fa0ci000023028.png"
              alt=""
            />
          </motion.div>
          {/* END OF IMG */}
          {/* WRITE UP */}
          <div className="space-y-10">
            <h4 className="font-light text-3xl md:text-4xl text-green-900">
              <span className="font-bold"> Enjoy</span> with Crypto Crusher
            </h4>
            <p>
              Trade over 40 major and minor Forex pairs with spreads that are
              five times lower than some of the most popular Forex brokers.
              Trade Gold, Silver, Platinum, Brent & WTI CFDs with spreads
              starting from 0.03 USD (on XAUUSD) per lot on Raw or Standard
              accounts.
            </p>
            <div>
              <Link
                href="/auth/sign-up"
                className="bg-green-500 text-white capitalize font-medium px-6 w-fit py-4 rounded-full text-xl"
              >
                Create Account
              </Link>
            </div>
          </div>
          {/* END OF WRITE UP */}
        </div>
        {/* END OF GRID CONTAINER */}
      </div>
      {/* end of container */}
    </section>
  );
};

export default Spread;
