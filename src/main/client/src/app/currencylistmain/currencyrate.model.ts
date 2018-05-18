export class CurrencyRate {
    public fromCurrency: string;
    public toCurrency: string;
    public price: number;
    public bid: number;
    public ask: number;

    constructor( fromCurrency: string, toCurrency: string, price: number, bid: number, ask: number ) {
        this.fromCurrency = fromCurrency;
        this.toCurrency = toCurrency;
        this.price = price;
        this.bid = bid;
        this.ask = ask;
    }

}