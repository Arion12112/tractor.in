import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinjamirigasiPage } from './pinjamirigasi.page';

describe('PinjamirigasiPage', () => {
  let component: PinjamirigasiPage;
  let fixture: ComponentFixture<PinjamirigasiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinjamirigasiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinjamirigasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
