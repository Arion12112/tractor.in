import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinjamPanenPage } from './pinjam-panen.page';

describe('PinjamPanenPage', () => {
  let component: PinjamPanenPage;
  let fixture: ComponentFixture<PinjamPanenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinjamPanenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinjamPanenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
