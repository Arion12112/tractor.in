import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlahTanahPage } from './olah-tanah.page';

describe('OlahTanahPage', () => {
  let component: OlahTanahPage;
  let fixture: ComponentFixture<OlahTanahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlahTanahPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlahTanahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
