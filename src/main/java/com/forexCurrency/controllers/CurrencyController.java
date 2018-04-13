package com.forexCurrency.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.forexCurrency.models.CurrencyRate;
import com.forexCurrency.services.CurrencyService;

@RestController
@RequestMapping("/currencylist")
public class CurrencyController {

	@GetMapping(value = { "", "/" })
	public List<CurrencyRate> currencyList() {
		return new CurrencyService().getCurrencyDataFromForex();
	}
}