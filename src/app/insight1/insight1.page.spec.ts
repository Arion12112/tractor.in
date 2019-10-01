import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Insight1Page } from './insight1.page';

describe('Insight1Page', () => {
  let component: Insight1Page;
  let fixture: ComponentFixture<Insight1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Insight1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Insight1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
