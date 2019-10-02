import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanamPage } from './tanam.page';

describe('TanamPage', () => {
  let component: TanamPage;
  let fixture: ComponentFixture<TanamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TanamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
