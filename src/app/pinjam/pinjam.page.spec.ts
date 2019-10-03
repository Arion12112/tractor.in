import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinjamPage } from './pinjam.page';

describe('PinjamPage', () => {
  let component: PinjamPage;
  let fixture: ComponentFixture<PinjamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinjamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinjamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
