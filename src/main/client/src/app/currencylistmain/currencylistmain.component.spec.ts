import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencylistmainComponent } from './currencylistmain.component';

describe('CurrencylistmainComponent', () => {
  let component: CurrencylistmainComponent;
  let fixture: ComponentFixture<CurrencylistmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencylistmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencylistmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
