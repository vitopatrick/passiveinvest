import React from "react";
import Link from "next/link";

const WinningTrade = () => {
  return (
    <section className="bg-neutral-50">
      {/* container */}
      <div className="md:w-[70%] w-[80%] mx-auto p-4 grid md:grid-cols-2 place-items-center gap-8">
        {/* container 1 */}
        <div className="space-y-10">
          <h4 className="text-3xl font-light md:text-4xl text-green-900">
            Experience the
            <span className="font-medium leading-6">
              {" "}
              multi-award winning platform
            </span>{" "}
          </h4>
          <p>
            Trade on MT4, the world's most popular trading platform with The
            Best Forex MT4 Broker for 2021, awarded by Global Forex Awards.
            Create an account today and explore our unique combination of
            trading tools and professional trading insight. You can download MT4
            for desktop, Android & iOS
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
        {/* end of container 1 */}
        {/* container 2 */}
        <div>
          <img
            src="https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/259cabe4-mt4-platform-devices_1000000000000000000028.png"
            alt="wallet"
          />
        </div>
        {/* end of container 2 */}
      </div>
      {/* end of container */}
    </section>
  );
};

export default WinningTrade;
