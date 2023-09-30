"use client";

import Top from "@/components/rankingTop/top";
import ApiService from "@/lib/apiService";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const service = new ApiService();
  const [order, setOrder] = useState("market_cap_desc");
  const [page, setPage] = useState(1);
  const [locale, setLocale] = useState("en");
  const [firstRender, setFirstRender] = useState(true);

  async function fetchData() {
    const response: Coin[] = await service.getCoinsList(order, page, locale);
    setCoins(response);
  }

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      fetchData();
    }
  }, []);

  return (
    <main className="p-16 flex flex-col items-center">
      <div className="mt-24 flex m-flex flex-col items-center">
        <div className="flex items-center">
          <Image
            src="/bitcoin_title.png"
            alt="bitcoin-icon-title"
            width={90}
            height={90}
          />
          <span className="text-8xl mx-8 text-white font-spacegrotesk">
            Track and Trade
          </span>
          <Image
            src="/ethreum_title.png"
            alt="ethereum-icon-title"
            width={90}
            height={90}
          />
        </div>
        <span className="mt-4 text-9xl text-white font-spacegrotesk text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-500">
          Crypto Currencies
        </span>
      </div>
      <Top top={coins.slice(0, 4)} />
    </main>
  );
}
