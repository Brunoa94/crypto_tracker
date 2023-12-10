import { BsDiscord, BsTelegram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex items-center w-full justify-center mt-11">
      <img src="/cofre.png" className="mr-auto w-80 max-responsive:w-40" />
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-4">
          <BsTwitter className="h-11 w-11 text-white max-responsive:w-8 max-responsive:h-8" />
          <BsDiscord className="h-11 w-11 text-white ml-6 max-responsive:w-8 max-responsive:h-8" />
          <BsTelegram className="h-11 w-11 text-white ml-6 max-responsive:w-8 max-responsive:h-8" />
        </div>
        <div className="flex items-center max-md:flex-col">
          <span className="text-xl text-white font-fredoka mr-3 max-md:mr-0">
            Privacy
          </span>
          <span className="text-xl text-white font-fredoka ml-3 max-md:ml-0">
            Terms of Use
          </span>
        </div>
      </div>
      <img src="/carteira.png" className="ml-auto w-80 max-responsive:w-40" />
    </div>
  );
};

export default Footer;
