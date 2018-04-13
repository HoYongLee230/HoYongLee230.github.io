import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencylistdataComponent } from './currencylistdata.component';

describe('CurrencylistdataComponent', () => {
  let component: CurrencylistdataComponent;
  let fixture: ComponentFixture<CurrencylistdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencylistdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencylistdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
