import Image from "next/image";
import TopCoin from "./topCoin";

interface TopProps {
  top: Coin[];
}

const Top = ({ top }: TopProps) => {
  return (
    <div className="flex align-center mt-12 justify-around w-3/4">
      {top.map((coin, index) => (
        <TopCoin key={`${index}-top-coin`} coin={coin} />
      ))}
    </div>
  );
};

export default Top;
