import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencylistfilterComponent } from './currencylistfilter.component';

describe('CurrencylistfilterComponent', () => {
  let component: CurrencylistfilterComponent;
  let fixture: ComponentFixture<CurrencylistfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencylistfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencylistfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
