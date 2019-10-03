import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinjamOlahTanahPage } from './pinjam-olah-tanah.page';

describe('PinjamOlahTanahPage', () => {
  let component: PinjamOlahTanahPage;
  let fixture: ComponentFixture<PinjamOlahTanahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinjamOlahTanahPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinjamOlahTanahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
