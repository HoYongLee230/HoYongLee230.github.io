package com.forexCurrency.models;

public class CurrencyRate {

	private String fromCurrency, toCurrency;
	private double price, bid, ask;

	public CurrencyRate(String fromCurrency, String toCurrency, double price, double bid, double ask) {
		this.fromCurrency = fromCurrency;
		this.toCurrency = toCurrency;
		this.price = price;
		this.bid = bid;
		this.ask = ask;
	}

	public String getFromCurrency() {
		return fromCurrency;
	}

	public void setFromCurrency(String fromCurrency) {
		this.fromCurrency = fromCurrency;
	}

	public String getToCurrency() {
		return toCurrency;
	}

	public void setToCurrency(String toCurrency) {
		this.toCurrency = toCurrency;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public double getBid() {
		return bid;
	}

	public void setBid(double bid) {
		this.bid = bid;
	}

	public double getAsk() {
		return ask;
	}

	public void setAsk(double ask) {
		this.ask = ask;
	}

}