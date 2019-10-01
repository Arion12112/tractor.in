import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Insight2Page } from './insight2.page';

describe('Insight2Page', () => {
  let component: Insight2Page;
  let fixture: ComponentFixture<Insight2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Insight2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Insight2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
