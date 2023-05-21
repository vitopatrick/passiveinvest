import React from "react";

const showOffs = [
  {
    id: 1,
    sup: "1 Million",
    sub: "News Feed",
  },
  {
    id: 2,
    sup: "18+ Million",
    sub: "Global Investors",
  },
  {
    id: 3,
    sup: "700+",
    sub: "Coins",
  },
];

const About = () => {
  return (
    <section>
      <div className="flex gap-3 items-center justify-between mt-4 flex-col md:flex-row">
        {showOffs.map((showOff) => (
          <div className="bg-slate-800 w-full p-4 rounded shadow">
            <div className="mb-3 text-lg">{showOff.sup}</div>
            <div className="text-xl font-bold">{showOff.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
