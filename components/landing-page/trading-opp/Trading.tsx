import React from "react";
import Link from "next/link";

const Trading = () => {
  return (
    <section>
      {/* container */}
      <div className="w-[80%] md:w-[70%] mx-auto p-3">
        {/* GRID CONTAINER */}
        <div className="grid md:grid-cols-2 gap-6 place-items-center">
          {/* IMG */}
          <div className="relative">
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/b731da9c-crypto-crusher-laptop-mockup_1000000000000000000028.png"
              alt=""
            />
          </div>
          {/* END OF IMG */}
          {/* WRITE UP */}
          <div className="space-y-10">
            <h4 className="font-light text-3xl md:text-4xl text-green-900">
              <span className="font-bold">
                {" "}
                Don't miss out on crypto trading opportunities
              </span>{" "}
              with Crypto Crusher
            </h4>
            <p>
              Get daily crypto trade ideas with precise entry, target and stop
              levels. Scan crypto markets by trend, price, % change, significant
              highs and lows. See crypto market sentiment to determine the
              strength of market direction. Use exclusive indicators to identify
              new trades easily. Access live educational resources and chat in
              the 24-hour trade room. Available for traders with a balance over
              $500.
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

export default Trading;
