import React from "react";

const supports = [
  {
    id: 1,
    url: "https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/055d35f8-mastercard-logo_1000000000000000000028.png",
  },
  {
    id: 2,
    url: "https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/ec2d0785-logo_104w01m000000000000028.png",
  },
  {
    id: 3,
    url: "https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/91b86028-paypal-svg_106u01u000000000000028.png",
  },
  {
    id: 4,
    url: "https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/cc9a8d2e-poli-payments_1000000000000000000028.png",
  },
  {
    id: 5,
    url: "https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/cc83ca70-bpay-logo_1000000000000000000028.png",
  },
  {
    id: 6,
    url: "https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/97647088-wire-transfer_1000000000000000000028.png",
  },
  {
    id: 7,
    url: "https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/679400aa-skrill-logo_1000000000000000000028.png",
  },
  {
    id: 8,
    url: "https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/e7b5cb38-neteller-logo_1000000000000000000028.png",
  },
];

const Payment = () => {
  return (
    <section className="bg-neutral-50">
      {/* container */}
      <div className="mx-auto md:w-[70%] p-4">
        {/* support container */}
        <div className="grid grid-cols-2 md:grid-cols-8 gap-8 place-items-center">
          {supports.map((support) => (
            <div key={support.id} className="md:w-[90%] w-[30%] mx-auto">
              <img src={support.url} alt="support link" />
            </div>
          ))}
        </div>
        {/* end of support container */}
      </div>

      {/* end of container */}
    </section>
  );
};

export default Payment;
