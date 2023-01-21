import { clsx } from "clsx";
import { formatCurrency } from "../../utils/formatCurrency";

interface TableProps {
  name: String | any;
  price: String | any;
  change: Number | any;
  img: String | any;
  symbol: String | any;
}

const TableItem = ({ name, price, change, img, symbol }: TableProps) => {
  const classColor = (isLower: number) =>
    clsx({
      ["font-sec font-medium py-4"]: true,
      ["font-sec font-medium text-red-500"]: isLower < 0,
      ["font-sec font-medium py-4 text-green"]: isLower > 0,
    });

  return (
    <div className="grid grid-cols-5 bg-neutral-100 px-2">
      <div className=" py-3 col-span-2 flex gap-4 items-center">
        <div className="w-[12%] md:w-[6%]">
          <img src={img} alt={name} />
        </div>
        <div className="font-sec font-bold text-paper">{name}</div>
      </div>
      <div className="font-sec  py-3 font-bold text-paper uppercase">
        {symbol}
      </div>
      <div className={classColor(change)}>{change.toFixed(2)}%</div>
      <div className="font-medium py-3">{formatCurrency(price)}</div>
    </div>
  );
};

export default TableItem;
