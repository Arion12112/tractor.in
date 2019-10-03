import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisTanamPage } from './analisis-tanam.page';

describe('AnalisisTanamPage', () => {
  let component: AnalisisTanamPage;
  let fixture: ComponentFixture<AnalisisTanamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisisTanamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisTanamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
