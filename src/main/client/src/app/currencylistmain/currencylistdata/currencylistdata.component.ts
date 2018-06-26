import { Component, OnInit } from '@angular/core';
import { CurrencyRate } from '../currencyrate.model';
import { CurrencyListService } from '../currencylist.service';
import { CurrencySelectService } from '../currencyselect.service';
import { CurrencyFilterService } from '../currencyfilter.service';

@Component( {
    selector: 'app-currencylistdata',
    templateUrl: './currencylistdata.component.html',
    styleUrls: ['./currencylistdata.component.css']
} )

export class CurrencylistdataComponent implements OnInit {
    currencyrates: CurrencyRate[] = [];
    currencyratefrom: CurrencyRate[] = [];
    currencyrateto: CurrencyRate[] = [];
    currencyratesoriginal: CurrencyRate[] = [];
    currencyrate: CurrencyRate;
    currencySet: Set<string> = new Set<string>();
    currencyArr: string[] = [];
    selectedcurrencyfilter: string = "";
    currencycount: number = 0;

    constructor( private currencyListService: CurrencyListService, private currencySelectService: CurrencySelectService, private currencyFilterService: CurrencyFilterService ) { }

    ngOnInit() {
        this.currencyListService.getCurrencyData()
            .subscribe(
            ( currencyrates: CurrencyRate[] ) => {
                this.currencyrates = currencyrates.sort(( a, b ) => {
                    return a.fromCurrency < b.fromCurrency ? -1 : a.fromCurrency > b.fromCurrency ? 1 : 0;
                } );
                this.currencyratesoriginal = this.currencyrates;
                this.currencySet.add( "---" );
                this.currencyrates.forEach( currencyrate => {
                    this.currencySet.add( currencyrate.fromCurrency );
                    this.currencySet.add( currencyrate.toCurrency );
                } );
                this.currencycount = this.currencyrates.length;
                this.currencyArr = Array.from( this.currencySet.values() );
                this.currencyFilterService.passCurrencySet( this.currencyArr );
            }
            );
        this.currencyFilterService.selectedCurrencySubjectObservable.subscribe( selectedcurrencyfilter => {
            this.selectedcurrencyfilter = selectedcurrencyfilter;
            this.currencyratefrom = this.currencyratesoriginal.filter( currencyrate => currencyrate.fromCurrency === this.selectedcurrencyfilter ).sort(( a, b ) => {
                return a.toCurrency < b.toCurrency ? -1 : a.toCurrency > b.toCurrency ? 1 : 0;
            } );
            this.currencyrateto = this.currencyratesoriginal.filter( currencyrate => currencyrate.toCurrency === this.selectedcurrencyfilter ).sort(( a, b ) => {
                return a.fromCurrency < b.fromCurrency ? -1 : a.fromCurrency > b.fromCurrency ? 1 : 0;
            } );
            this.currencyrates = this.selectedcurrencyfilter === "---" ? this.currencyratesoriginal : [...this.currencyratefrom, ...this.currencyrateto];
            this.currencycount = this.currencyrates.length;
        } );
    }

    currencyrateselect( index ) {
        this.currencySelectService.passSelectedCurrency( this.currencyrates[index] );
    }
}