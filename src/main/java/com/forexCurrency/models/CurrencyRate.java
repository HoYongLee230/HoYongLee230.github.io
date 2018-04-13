package com.forexCurrency.models;

public class CurrencyRate {

	private String fromCurrency, toCurrency;
	private double bid, ask;

	public CurrencyRate(String fromCurrency, String toCurrency, double bid, double ask) {
		this.fromCurrency = fromCurrency;
		this.toCurrency = toCurrency;
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