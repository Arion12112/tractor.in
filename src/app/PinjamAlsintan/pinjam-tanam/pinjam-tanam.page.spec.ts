import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinjamTanamPage } from './pinjam-tanam.page';

describe('PinjamTanamPage', () => {
  let component: PinjamTanamPage;
  let fixture: ComponentFixture<PinjamTanamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinjamTanamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinjamTanamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
