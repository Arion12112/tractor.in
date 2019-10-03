import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsintanIrigasiPage } from './alsintan-irigasi.page';

describe('AlsintanIrigasiPage', () => {
  let component: AlsintanIrigasiPage;
  let fixture: ComponentFixture<AlsintanIrigasiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsintanIrigasiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsintanIrigasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
