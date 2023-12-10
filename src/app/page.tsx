"use client";

import ChooseUs from "@/components/chooseUs/chooseUs";
import Footer from "@/components/footer/footer";
import JoinUs from "@/components/joinUs/joinUs";
import CoinsTable from "@/components/market/coinsTable";
import Navbar from "@/components/navbar/navbar";
import Top from "@/components/rankingTop/top";
import ApiService from "@/lib/apiService";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [topCoins, setTopCoins] = useState<Coin[]>([]);
  const service = new ApiService();
  const [order, setOrder] = useState("market_cap_desc");
  const [locale, setLocale] = useState("en");
  const [firstRender, setFirstRender] = useState(true);
  const [page, setPage] = useState(1);
  const ref = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  async function fetchData(page: number) {
    const response: Coin[] = await service.getCoinsList(order, page, locale);
    setCoins(response);
    setPage(page);

    if (page === 1) {
      setTopCoins(response.slice(0, 4));
    }
  }

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      fetchData(1);
    }
  }, []);

  const handleScroll = () => {
    if (ref.current) {
      console.log("SCROLL: " + ref.current.offsetTop);
      if (ref.current.offsetTop > 0) {
        setScrolled(true);
      }
    }
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />
      <main
        ref={ref}
        className="p-16 flex flex-col items-center h-screen overflow-y-scroll max-responsive:p-8"
      >
        <div className="mt-24 flex m-flex flex-col items-center">
          <div className="flex items-center max-responsive:flex-col">
            <Image
              src="/bitcoin_title.png"
              alt="bitcoin-icon-title"
              width={90}
              height={90}
              className="animate-bounce"
            />
            <span className="text-8xl mx-8 text-white font-spacegrotesk max-responsive:text-6xl max-md:text-center">
              Track and Trade
            </span>
            <span className="mt-4 text-9xl text-white font-spacegrotesk text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-500 max-responsive:text-7xl max-xl:text-8xl max-md:text-5xl inline-block responsive:hidden max-md:text-center">
              Crypto Currencies
            </span>
            <Image
              src="/ethreum_title.png"
              alt="ethereum-icon-title"
              width={90}
              height={90}
              className="animate-bounce max-xl:mt-7"
            />
          </div>
          <span className="mt-4 text-9xl text-white font-spacegrotesk text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-500 max-responsive:text-7xl max-xl:text-8xl hidden responsive:inline-block">
            Crypto Currencies
          </span>
        </div>
        <Top top={topCoins} />
        <CoinsTable coins={coins} fetchCoins={fetchData} page={page} />
        <ChooseUs />
        <JoinUs />
        <Footer />
      </main>
    </>
  );
}
