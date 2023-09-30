import CoinAdapter from "@/core/adapter/coinAdapter";
import axios from "axios";

class ApiService {
  private baseUrl: string = "https://api.coingecko.com/api/v3";

  constructor() {}

  public async getCoinsList(order: string, page: number, locale: string) {
    const listUrl = `/coins/markets?vs_currency=eur&order=${order}&per_page=20&page=${page}&sparkline=false&locale=${locale}`;

    const response = await axios
      .get(`${this.baseUrl}${listUrl}`)
      .then((response) => response.data);

    const coinsList: Coin[] = response.map(
      (coin: any) => new CoinAdapter(coin)
    );

    return coinsList;
  }
}

export default ApiService;
