import { formatCurrency } from "../../utils/formatCurrency";

const HotCoinTable = ({ coins }: any) => {
  return (
    <div>
      <div className="flex items-center justify-between mt-3 bg-neutral-50 py-1 px-2 rounded">
        <div className="font-sec font-bold text-paper">Coin</div>
        <div className="font-sec font-bold text-paper">Price</div>
      </div>
      {coins.map((coin: any) => (
        <div key={coin.id} className="flex items-center my-9 justify-between">
          <div className="flex items-center gap-2">
            <div className="w-[8%]">
              <img src={coin.img} />
            </div>
            <h2 className="font-sec text-paper font-bold">{coin.name}</h2>
          </div>
          <div>
            <h3 className="font-sec text-paper font-bold">
              {formatCurrency(coin.currentPrice)}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotCoinTable;
