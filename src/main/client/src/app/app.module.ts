import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CurrencylistmainComponent } from './currencylistmain/currencylistmain.component';
import { CurrencylistdataComponent } from './currencylistmain/currencylistdata/currencylistdata.component';
import { CurrencyListService } from './currencylistmain/currencylist.service';
import { CurrencySelectService } from './currencylistmain/currencyselect.service';
import { CurrencylistselectComponent } from './currencylistmain/currencylistselect/currencylistselect.component';

@NgModule( {
    declarations: [
        AppComponent,
        CurrencylistmainComponent,
        CurrencylistdataComponent,
        CurrencylistselectComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [
        CurrencyListService,
        CurrencySelectService
    ],
    bootstrap: [AppComponent]
} )
export class AppModule { }