import React from "react";
import Link from "next/link";

const HeroCta = () => {
  return (
    <section>
      <div>
        <div className="w-[80%] md:[50%] mx-auto shadow-xl p-4 space-y-4 rounded">
          <h1 className="text-center font-bold text-xl">
            Start Your Application Now
          </h1>
          <div className="flex flex-col items-center justify-center text-center">
            <p>
              We value your privacy. By clicking 'Create Account', you confirm
              that you have read and accepted our Privacy Policy and you
              understand that you are creating an account under our passive
              trading Global Limited regulated by the SCB, (SIA-F220).
            </p>
            <div className="my-[4rem] flex flex-col md:flex-row gap-4">
              <Link
                href="/auth/sign-up"
                className="rounded-full px-6 py-3 bg-green-500 my-4 text-xl text-white"
              >
                Create Account
              </Link>
              <Link
                href="/auth/sign-in"
                className="rounded-full px-6 py-3 bg-yellow-500 my-4 text-xl text-white"
              >
                login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCta;
