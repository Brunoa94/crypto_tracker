/* eslint-disable @next/next/no-img-element */
interface TopCoinProps {
  coin: Coin;
}

const TopCoin = ({ coin }: TopCoinProps) => {
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

  return (
    <div key={`top-coin-${coin.name}`} className="flex flex-col items-center">
      <img
        src={coin.image}
        alt={`crypto-${coin.name}`}
        className="w-24 max-md:w-16"
      />
      <div className="flex items-center mt-4">
        <span className="text-white mr-1 font-bold text-2xl font-spacegrotesk max-md:text-lg">
          {coin.name}
        </span>
        <span
          className={`ml-1 ${
            coin.priceChange < 0 ? "text-red-600" : "text-green-600"
          } text-lg font-semibold font-spacegrotesk hidden responsive:inline-block`}
        >
          {coin.priceChange}
        </span>
      </div>
      <span
        className={`ml-1 ${
          coin.priceChange < 0 ? "text-red-600" : "text-green-600"
        } text-lg font-semibold font-spacegrotesk responsive:hidden inline-block`}
      >
        {coin.priceChange}
      </span>
      <span className="text-white font-bold text-2xl mt-1 font-spacegrotesk max-md:text-lg">
        € {getReadableNumber(Number(coin.currentPrice))}
      </span>
    </div>
  );
};

export default TopCoin;
