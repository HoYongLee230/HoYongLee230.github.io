import { CurrencyRate } from './currencyrate.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CurrencySelectService {

    constructor() { }

    private selectedCurrency = new BehaviorSubject<CurrencyRate>( { fromCurrency: "", toCurrency: "", bid: 0, ask: 0 } );
    currentSelectedCurrency = this.selectedCurrency.asObservable();


    passSelectedCurrency( currencyRate: CurrencyRate ) {
        this.selectedCurrency.next( currencyRate );
    }
}