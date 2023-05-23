import Automate from "../components/landing-page/automate/Automate";
import Footer from "../components/landing-page/footer/Footer";
import Hero from "../components/landing-page/hero/Hero";
import Support from "../components/landing-page/support/Support";
import TradeFaster from "../components/landing-page/trade-faster/TradeFaster";
import Insights from "../components/landing-page/trading-insights/Insights";
import Trading from "../components/landing-page/trading-opp/Trading";
import WaysToWithdraw from "../components/landing-page/ways-to-withdraw/WaysToWithdraw";
import WinningTrade from "../components/landing-page/winning-trade/WinningTrade";
export default function Home() {
  return (
    <>
      <Hero />
      <WinningTrade />
      <TradeFaster />
      <Automate />
      <Trading />
      <Support />
      <Insights />
      <WaysToWithdraw />
      <Footer />
    </>
  );
}
