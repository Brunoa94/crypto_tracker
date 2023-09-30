/* eslint-disable @next/next/no-img-element */
interface TopCoinProps {
  coin: Coin;
}

const TopCoin = ({ coin }: TopCoinProps) => {
  return (
    <div key={`top-coin-${coin.name}`} className="flex flex-col items-center">
      <img
        src={coin.image}
        alt={`crypto-${coin.name}`}
        width={90}
        height={90}
      />
      <div className="flex items-center mt-4">
        <span className="text-white mr-1 font-bold text-2xl font-spacegrotesk">
          {coin.name}
        </span>
        <span
          className={`ml-1 ${
            coin.priceChange < 0 ? "text-red-600" : "text-green-600"
          } text-lg font-semibold font-spacegrotesk`}
        >
          {coin.priceChange}
        </span>
      </div>
      <span className="text-white font-bold text-2xl mt-1 font-spacegrotesk">
        €{" "}
        {Number(coin.currentPrice) % 1 > 0
          ? coin.currentPrice
          : `${coin.currentPrice}.00`}
      </span>
    </div>
  );
};

export default TopCoin;
