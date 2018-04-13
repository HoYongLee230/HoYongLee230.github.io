import { Component, OnInit } from '@angular/core';
import { CurrencyRate } from '../currencyrate.model';
import { CurrencySelectService } from '../currencyselect.service';

@Component( {
    selector: 'app-currencylistselect',
    templateUrl: './currencylistselect.component.html',
    styleUrls: ['./currencylistselect.component.css']
} )
export class CurrencylistselectComponent implements OnInit {

    selectedCurrencyRate: CurrencyRate;
    constructor( private currencySelectService: CurrencySelectService ) { }

    ngOnInit() {
        this.currencySelectService.currentSelectedCurrency.subscribe( selectedCurrencyRate => this.selectedCurrencyRate = selectedCurrencyRate );
    }

}