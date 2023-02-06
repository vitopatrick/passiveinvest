import AmountCard from "../../shared/cards/amount-card";
import { useFetchUser } from "../../hooks/useFetchUser";


const DashboardAccountCards = () => {
  const { userState: user, loading }: any = useFetchUser();
  return (
    <section>
      <div className="py-3 px-1 font-main text-white font-semibold text-xl">
        Account Summary
      </div>

      <div className="flex md:flex-row flex-col items-center justify-between gap-3 py-3">
        <AmountCard
          accountType={"Main Account"}
          amount={user?.MainAccount}
          loading={loading}
        />
        <AmountCard
          accountType={"Trading Account"}
          amount={user?.TradingAccount}
          loading={loading}
        />
      </div>
    </section>
  );
};


export default DashboardAccountCards;
