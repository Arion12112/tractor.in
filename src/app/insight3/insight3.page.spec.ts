import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Insight3Page } from './insight3.page';

describe('Insight3Page', () => {
  let component: Insight3Page;
  let fixture: ComponentFixture<Insight3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Insight3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Insight3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
