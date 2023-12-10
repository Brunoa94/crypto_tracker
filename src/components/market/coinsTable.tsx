import { useEffect, useState } from "react";

interface CoinsTableProps {
  coins: Coin[];
  fetchCoins: (page: number) => void;
  page: number;
}

const CoinsTable = (props: CoinsTableProps) => {
  const tableParameters = ["Coin", "Price", "24h Change", "Market Cap"];
  const numberOfPages = [1, 2, 3, 4, 5];
  const [responsive, setResponsive] = useState(false);

  function formatNumberWithCommas(number: Number) {
    const numberString = number.toString();
    const parts = [];

    for (let i = 0; i < numberString.length; i += 3) {
      parts.push(numberString.slice(i, i + 3));
    }

    return parts.join(",");
  }

  function getReadableNumber(number: number, places: number = 2): string {
    if (number >= 1e9) {
      return `${Math.round((number / 10 ** 9) * places) / places}B`;
    }
    if (number >= 1e6) {
      return `${Math.round((number / 10 ** 6) * places) / places}M`;
    }
    if (number >= 1e3) {
      return `${Math.round((number / 10 ** 3) * places) / places}K`;
    }

    return number.toFixed(2).toString();
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1100) {
        setResponsive(true);
      } else {
        setResponsive(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <table className="mt-12 w-full">
        <tr className="w-full bg-gradient-to-r to-indigo-900 from-rose-100 h-12 px-6 rounded-t-lg">
          {tableParameters.map((parameter) => (
            <th className="text-white text-lg max-md:text-base">{parameter}</th>
          ))}
        </tr>
        {props.coins.map((coin) => (
          <tr className="w-full border-b-white border-b-4">
            <td className="flex items-center px-6 max-md:pl-0">
              <div className="flex items-center p-4">
                <img className="w-12" src={coin.image} />
                <span className="ml-2 text-3xl text-white max-responsive:text-xl">
                  {coin.name}
                </span>
              </div>
            </td>
            <td>
              <div className="flex justify-center w-full">
                <span className="text-2xl text-white max-responsive:text-xl">
                  $
                  {responsive
                    ? getReadableNumber(Number(coin.currentPrice))
                    : Number(coin.currentPrice) % 1 > 0
                    ? coin.currentPrice
                    : `${coin.currentPrice}.00`}
                </span>
              </div>
            </td>
            <td>
              <span
                className={`text-2xl ${
                  coin.priceChange > 0 ? "text-green-700" : "text-red-700"
                } text-white flex justify-center w-full max-responsive:text-xl`}
              >
                {responsive
                  ? getReadableNumber(coin.priceChange)
                  : coin.priceChange}
              </span>
            </td>
            <td>
              <div className="flex justify-center w-full">
                <span className="text-2xl text-white max-responsive:text-xl">
                  $
                  {responsive
                    ? getReadableNumber(coin.marketCap)
                    : formatNumberWithCommas(coin.marketCap)}
                </span>
              </div>
            </td>
          </tr>
        ))}
      </table>
      <div className="flex items-center mt-10">
        {numberOfPages.map((page) => (
          <div
            onClick={() => props.fetchCoins(page)}
            className={`h-11 w-11 flex items-center justify-center mx-4 rounded-full cursor-pointer ${
              props.page === page
                ? "bg-gradient-to-b to-indigo-900 from-purple-900"
                : "bg-white"
            }`}
          >
            <span
              className={`${
                props.page === page ? "text-white" : "text-purple-950"
              } font-semibold`}
            >
              {page}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinsTable;
