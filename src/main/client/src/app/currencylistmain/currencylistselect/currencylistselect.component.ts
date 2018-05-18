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
    showConversion: boolean = false;
    fromCurrencyValue: string = "0";
    toCurrencyValue: number;

    constructor( private currencySelectService: CurrencySelectService ) { }

    ngOnInit() {
        this.currencySelectService.currentSelectedCurrency.subscribe( selectedCurrencyRate => {
            this.selectedCurrencyRate = selectedCurrencyRate;
            this.showConversion = this.selectedCurrencyRate.fromCurrency === "" ? false : true;
        } );

    }

    onFromCurrencyChange( e ) {
        this.fromCurrencyValue = e;
        this.toCurrencyValue = Number( this.fromCurrencyValue ) ? Number( this.fromCurrencyValue ) * this.selectedCurrencyRate.price : 0;
    }

}