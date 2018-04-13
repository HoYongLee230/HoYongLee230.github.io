import { Component, OnInit } from '@angular/core';
import { CurrencyRate } from '../currencyrate.model';
import { CurrencyListService } from '../currencylist.service';
import { CurrencySelectService } from '../currencyselect.service';

@Component( {
    selector: 'app-currencylistdata',
    templateUrl: './currencylistdata.component.html',
    styleUrls: ['./currencylistdata.component.css']
} )
export class CurrencylistdataComponent implements OnInit {

    currencyrates: CurrencyRate[] = [];
    currencyrate: CurrencyRate;

    currencycount: number = 0;

    constructor( private currencyListService: CurrencyListService, private currencyselectService: CurrencySelectService ) { }

    ngOnInit() {
        this.currencyListService.getCurrencyData()
            .subscribe(
            ( currencyrates: CurrencyRate[] ) => {
                this.currencyrates = currencyrates;
            }
            );
        this.currencycount = this.currencyrates.length;
    }

    currencyrateselect( index ) {
        this.currencyselectService.passSelectedCurrency( this.currencyrates[index] );
    }
}