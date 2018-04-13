import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencylistselectComponent } from './currencylistselect.component';

describe('CurrencylistselectComponent', () => {
  let component: CurrencylistselectComponent;
  let fixture: ComponentFixture<CurrencylistselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencylistselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencylistselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
