import { Component, OnInit } from '@angular/core';
import { CurrencyFilterService } from '../currencyfilter.service';

@Component( {
    selector: 'app-currencylistfilter',
    templateUrl: './currencylistfilter.component.html',
    styleUrls: ['./currencylistfilter.component.css']
} )
export class CurrencylistfilterComponent implements OnInit {

    currencyArr: string[] = [];

    constructor( private currencyFilterService: CurrencyFilterService ) { }

    ngOnInit() {
        this.currencyFilterService.currencyArrSubjectObservable.subscribe( currencyArr => {
            this.currencyArr = currencyArr;
        } );
    }
    
    changeSelectedCurrency(e) {
        this.currencyFilterService.getSelectedCurrency(e);
    }

}