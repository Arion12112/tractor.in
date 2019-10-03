import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinjamolahtanahPage } from './pinjamolahtanah.page';

describe('PinjamolahtanahPage', () => {
  let component: PinjamolahtanahPage;
  let fixture: ComponentFixture<PinjamolahtanahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinjamolahtanahPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinjamolahtanahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
