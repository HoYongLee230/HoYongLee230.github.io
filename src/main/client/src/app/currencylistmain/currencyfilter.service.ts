import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CurrencyFilterService {

    private currencyArrSubject = new BehaviorSubject<string[]>( [] );
    private selectedCurrencySubject = new BehaviorSubject<string>( "" );
    currencyArrSubjectObservable = this.currencyArrSubject.asObservable();
    selectedCurrencySubjectObservable = this.selectedCurrencySubject.asObservable();

    constructor() {
    }

    passCurrencySet( currencyArr: string[] ) {
        this.currencyArrSubject.next( currencyArr );
    }

    getSelectedCurrency( selectedCurrency: string ) {
        this.selectedCurrencySubject.next( selectedCurrency );
    }

}