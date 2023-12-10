class CoinAdapter {
  private id: string;
  private symbol: string;
  private name: string;
  private image: string;
  private currentPrice: string;
  private priceChange: number;
  private marketCap: number;

  constructor(data: any) {
    this.id = data.id ? data.id : "id";
    this.symbol = data.symbol ? data.symbol : "symbol";
    this.name = data.name ? data.name : "symbol";
    this.image = data.image ? data.image : "symbol";
    this.currentPrice = data.current_price
      ? data.current_price
      : "currentPrice";
    this.priceChange = data.price_change_percentage_24h
      ? data.price_change_percentage_24h
      : "priceChange";
    this.marketCap = data.market_cap ? data.market_cap : "No Market Cap";
  }

  public adapt(data: any) {
    return new Coin(
      this.id,
      this.symbol,
      this.name,
      this.image,
      this.currentPrice,
      this.priceChange,
      this.marketCap
    );
  }
}

export default CoinAdapter;
