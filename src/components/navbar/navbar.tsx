import Image from "next/image";
import React, { useEffect } from "react";
import { BsDiscord, BsTelegram, BsTwitter } from "react-icons/bs";

interface NavbarProps {
  scrolled: boolean;
}

function Navbar(props: NavbarProps) {
  const links = ["Home", "Market", "Choose Us", "Join"];

  useEffect(() => {
    console.log("SCROLLED: " + props.scrolled);
  }, [props.scrolled]);

  return (
    <nav className="relative py-4 top-0 bg-transparent flex bg-amber-700 w-full items-center px-8">
      <Image
        src={"/bitcoin.svg"}
        alt="bitcoin-icon"
        width={40}
        height={40}
        className="mr-3"
      />
      <span className="font-spacegrotesk text-3xl text-white font-bold">
        CrypTracker
      </span>
      <div className="flex-auto flex items-center justify-center max-responsive:hidden">
        {links.map((link) => (
          <span
            key={`navbar-link-${link}`}
            className="font-audiowide text-white mx-4 text-2xl pointer font-bold cursor-pointer"
          >
            {link}
          </span>
        ))}
      </div>
      <div className="hidden md:flex max-responsive:ml-auto">
        <BsTwitter className="h-8 w-8 text-white" />
        <BsDiscord className="h-8 w-8 text-white ml-6" />
        <BsTelegram className="h-8 w-8 text-white ml-6" />
      </div>
    </nav>
  );
}

export default Navbar;
