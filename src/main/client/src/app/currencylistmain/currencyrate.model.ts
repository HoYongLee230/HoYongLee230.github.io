export class CurrencyRate {
    public fromCurrency: string;
    public toCurrency: string;
    public bid: number;
    public ask: number;

    constructor( fromCurrency: string, toCurrency: string, bid: number, ask: number ) {
        this.fromCurrency = fromCurrency;
        this.toCurrency = toCurrency;
        this.bid = bid;
        this.ask = ask;
    }

}