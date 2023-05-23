import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const TradeFaster = () => {
  return (
    <section>
      {/* container */}
      <div className="w-[80%] md:w-[70%] mx-auto p-3">
        {/* GRID CONTAINER */}
        <div className="grid md:grid-cols-2 gap-6 place-items-center">
          {/* IMG */}
          <motion.div
            initial={{ y: "10px" }}
            animate={{ y: "20px" }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
            className="w-[70%]"
          >
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/0375b239-flash-trader-ui_10000000dl0cc01d017028.png"
              alt="img"
            />
          </motion.div>
          {/* END OF IMG */}
          {/* WRITE UP */}
          <div className="space-y-10">
            <h4 className="font-light text-3xl md:text-4xl text-green-900">
              <span className="font-bold">Trade Faster</span>
              with FlashTrader
            </h4>
            <p>
              Control your risk in a flash! Download and install your new trade
              ticket to calculate position size and place stops and limits
              instantly. Plus, dynamically react to market movements with
              adjustable profit targets. Flash Trader is installed as an EA,
              exclusively for MT5.
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

export default TradeFaster;
