import { HiOutlineWallet, HiPencil } from "react-icons/hi2";
import { PiNotepad } from "react-icons/pi";
import ChooseCard from "./chooseCard";
import Image from "next/image";
import { RiNftLine } from "react-icons/ri";
import { TbPigMoney } from "react-icons/tb";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

const ChooseUs = () => {
  return (
    <div className="flex flex-col mt-20 w-full items-center">
      <div className="flex items-center">
        <span className="text-7xl text-white max-md:text-5xl">WHY</span>
        <span className="text-7xl bg-clip-text bg-gradient-to-r from-violet-700 to-fuchsia-700 ml-4 text-transparent max-md:text-5xl">
          CHOOSE US
        </span>
      </div>
      <div className="flex items-center w-full mt-8 justify-between max-responsive:flex-col">
        <div className="flex flex-col">
          <ChooseCard
            title="Connect your wallet"
            description="Use Trust Wallet, Metamask or to connect to the app."
            icon={<HiOutlineWallet className="text-white w-8 h-8" />}
          />
          <ChooseCard
            title="Select your quantity"
            description="Upload your crypto and set a title, description and price."
            icon={<HiPencil className="text-white w-8 h-8" />}
          />
          <ChooseCard
            title="Confirm transaction"
            description="Earn by selling your crypto on our marketplace."
            icon={<PiNotepad className="text-white w-8 h-8" />}
          />
        </div>
        <div className="flex flex-col max-responsive:flex-row max-responsive:mt-8 max-responsive:mb-8">
          <Image
            width={220}
            height={250}
            src="/bitcoin_hand.png"
            alt="bitcoin-hand"
          />
        </div>
        <div className="flex flex-col">
          <ChooseCard
            title="Receive your own nfts"
            description="Invest all your crypto at one place on one platform."
            icon={<RiNftLine className="text-white w-8 h-8" />}
          />
          <ChooseCard
            title="Take a market to sell"
            description="Discover, collect the right crypto collections to buy or sell."
            icon={<TbPigMoney className="text-white w-8 h-8" />}
          />
          <ChooseCard
            title="Drive your collection"
            description="We make it easy to Discover, Invest and manage."
            icon={<MdOutlineDriveFolderUpload className="text-white w-8 h-8" />}
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
