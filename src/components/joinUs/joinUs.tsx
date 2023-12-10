import Image from "next/image";

const JoinUs = () => {
  return (
    <div className="flex mt-20 w-full justify-evenly items-start">
      <Image
        src="/bitcoin_title.png"
        alt="bitcoin-icon-title"
        width={90}
        height={50}
        className="animate-bounce max-sm:hidden"
      />
      <div className="flex flex-col items-center">
        <span className="text-8xl text-white font-audiowide max-responsive:text-6xl max-md:text-center">
          Join us via
        </span>
        <span className="mt-4 font-audiowide text-7xl font-bold bg-clip-text bg-gradient-to-r from-violet-700 to-fuchsia-700 ml-4 text-transparent">
          Discord
        </span>
        <span className="mt-5 font-audiowide text-xl text-gray-50 max-responsive:text-lg max-responsive:text-center">
          Invest and manage all your crypto at one place.
        </span>
        <div className="flex items-center justify-center bg-gradient-to-r from-indigo-600 to-pink-500 px-8 py-5 rounded-3xl mt-6 cursor-pointer">
          <span className="text-white font-audiowide text-lg uppercase">
            Join via Discord
          </span>
        </div>
      </div>
      <Image
        src="/ethreum_title.png"
        alt="ethereum-icon-title"
        width={90}
        height={90}
        className="animate-bounce max-sm:hidden"
      />
    </div>
  );
};

export default JoinUs;
