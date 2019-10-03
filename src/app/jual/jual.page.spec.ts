import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JualPage } from './jual.page';

describe('JualPage', () => {
  let component: JualPage;
  let fixture: ComponentFixture<JualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
