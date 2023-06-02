import React from "react";

const HeroText = () => {
  return (
    <div className="hidden p-4 text-center bg-neutral-100">
      <p className="hidden md:block">
        CFDs are complex instruments and come with a high risk of losing money
        rapidly due to leverage. 79.04% of retail investor accounts lose money
        when trading CFDs with this provider. You should consider whether you
        understand how CFDs work and whether you can afford to take the high
        risk of losing your money.
      </p>
      <p className="block md:hidden font-medium">
        79.04% of retail investor accounts lose money when trading CFDs with
        this provider.
      </p>
    </div>
  );
};

export default HeroText;
