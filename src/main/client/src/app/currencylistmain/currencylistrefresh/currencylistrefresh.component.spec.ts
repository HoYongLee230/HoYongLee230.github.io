import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencylistrefreshComponent } from './currencylistrefresh.component';

describe('CurrencylistrefreshComponent', () => {
  let component: CurrencylistrefreshComponent;
  let fixture: ComponentFixture<CurrencylistrefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencylistrefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencylistrefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
