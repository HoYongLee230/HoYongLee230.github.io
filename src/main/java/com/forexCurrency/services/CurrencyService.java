package com.forexCurrency.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpEntity;
import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.forexCurrency.constants.Constants;
import com.forexCurrency.models.CurrencyRate;

public class CurrencyService {

	static final String FOREXAPIKEY = Constants.forexAPIConst;

	static CloseableHttpClient httpClient = HttpClients.createDefault();

	public List<CurrencyRate> getCurrencyDataFromForex() {
		String currencyPairs = "";
		List<CurrencyRate> currencyRateList = new ArrayList<>();
		HttpGet getCurrencies = new HttpGet("https://forex.1forge.com/1.0.3/symbols?api_key=" + FOREXAPIKEY);
		HttpGet getCurrencyData;
		try {

			CloseableHttpResponse currenciesResponse = httpClient.execute(getCurrencies);
			HttpEntity currenciesEntity = currenciesResponse.getEntity();
			String currenciesEntityString = EntityUtils.toString(currenciesEntity);

			currencyPairs = currenciesEntityString.substring(1, currenciesEntityString.length() - 1).replaceAll("\"",
					"");
			getCurrencyData = new HttpGet(
					"https://forex.1forge.com/1.0.3/quotes?pairs=" + currencyPairs + "&api_key=" + FOREXAPIKEY);
			CloseableHttpResponse currencyDataResponse = httpClient.execute(getCurrencyData);
			HttpEntity currencyDataEntity = currencyDataResponse.getEntity();
			JSONArray currencyDataJSONArray = new JSONArray(EntityUtils.toString(currencyDataEntity));
			for (int i = 0; i < currencyDataJSONArray.length(); i++) {
				JSONObject currencyDataJSONObject = currencyDataJSONArray.getJSONObject(i);
				currencyRateList.add(new CurrencyRate(currencyDataJSONObject.getString("symbol").substring(0, 3),
						currencyDataJSONObject.getString("symbol").substring(3),
						currencyDataJSONObject.getDouble("bid"), currencyDataJSONObject.getDouble("ask")));
			}
		} catch (ClientProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return currencyRateList;
	}
}