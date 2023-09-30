class Coin {
  public id: string;
  public symbol: string;
  public name: string;
  public image: string;
  public currentPrice: string;
  public priceChange: number;

  constructor(
    id: string,
    symbol: string,
    name: string,
    image: string,
    currentPrice: string,
    priceChange: number
  ) {
    this.id = id;
    this.symbol = symbol;
    this.name = name;
    this.image = image;
    this.currentPrice = currentPrice;
    this.priceChange = priceChange;
  }
}
