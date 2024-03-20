import React from "react";

const Banner = () => {
  return (
    <section className="p-3  relative bg-gradient-to-r from-yellow-900 via-orange-700 to-green-300">
      {/* CONTAINER */}
      <div className="w-[80%] md:w-[80%] mx-auto">
        {/* COMPANY LOGO */}
        <div className="md:w-[30%] my-10">
          <img
            src="https://d9hhrg4mnvzow.cloudfront.net/trade.passive trading .com/en/trade-smarter/forexbrokers/dc6e1b9e-forexbrokers-logo_10000000gc01r005000028.png"
            alt=""
          />
        </div>
        {/* WRT UP */}
        <div className="flex md:flex-row flex-col gap-10 items-center justify-center">
          <div className="flex-3">
            <div className="space-y-4 col-span-3">
              <h1 className="text-6xl md:text-8xl text-white font-black">
                Trade <span className="text-black">smart</span>
              </h1>
              <p className="my-4 text-lg md:text-xl text-white">
                Daily trade ideas. Professional trading insight. Code-free
                automation. 800+ CFD markets.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/trade.passive trading .com/en/trade-smarter/forexbrokers/777c390c-trade-smarter-8-01_10000000n40t000i00i028.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* END OF CONTAINER */}
    </section>
  );
};

export default Banner;
