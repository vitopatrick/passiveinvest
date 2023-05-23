import React from "react";
import Link from "next/link";
import * as Md from "react-icons/md";

const Support = () => {
  //   const [active, setActive] = useState<number>(0);

  const reviews = [
    {
      review: "Best Broker in town",
      about:
        "Low spreads, no spread widening, support answer in short times! Perfect broker",
      date: "3 days ago",
      name: "NotSameLeo",
    },
    {
      review: "Best Broker in town",
      about:
        "Low spreads, no spread widening, support answer in short times! Perfect broker",
      date: "3 days ago",
      name: "NotSameLeo",
    },
    {
      review: "Best Broker in town",
      about:
        "Low spreads, no spread widening, support answer in short times! Perfect broker",
      date: "3 days ago",
      name: "NotSameLeo",
    },
    {
      review: "Best Broker in town",
      about:
        "Low spreads, no spread widening, support answer in short times! Perfect broker",
      date: "3 days ago",
      name: "NotSameLeo",
    },
  ];

  return (
    <section className="bg-neutral-50 px-4 py-10">
      {/* container */}
      <div className="md:w-[70%] w-[80%] mx-auto p-4 grid md:grid-cols-2 place-items-center gap-8">
        {/* container 1 */}
        <div className="space-y-10">
          <h4 className="text-3xl font-light md:text-4xl text-green-900">
            Speak with our
            <span className="font-medium leading-6"> award winning team</span>
          </h4>
          <p>
            Our team is trusted by 1000s of clients worldwide and is here to
            help you. We're fast, reliable, and always ready to get you set up.
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
          <div className="flex flex-col items-center shadow-md p-4 rounded-xl">
            <div>
              <img
                src="https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/c0cd0555-trust-pilot-stars_1000000000000000000028.png"
                alt=""
              />
            </div>
            <div className="space-y-4">
              <p className="text-neutral-800 text-xs">
                Showing our 4 & 5 star reviews
              </p>
              <div className="space-y-4">
                <h4 className="font-bold text-green-800">
                  {reviews[0].review}
                </h4>
                <p>{reviews[0].about}</p>
                <p className="text-xs">
                  <span className="mr-1 font-bold">{reviews[0].name}</span>
                  {reviews[0].date}
                </p>
              </div>
              {/* CONTROLS */}
              <div className="flex justify-between items-center md:w-[50%] mx-auto my-10">
                <div className="p-2 border border-green-900 rounded-full">
                  <Md.MdArrowLeft size="20px" />
                </div>
                <div className="p-2 border border-green-900 rounded-full">
                  <Md.MdArrowRight size="20px" />
                </div>
              </div>
              {/* END OF CONTROLS */}
            </div>
          </div>
        </div>
        {/* end of container 2 */}
      </div>
      {/* end of container */}
    </section>
  );
};

export default Support;
