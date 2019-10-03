import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsintaTanamPage } from './alsinta-tanam.page';

describe('AlsintaTanamPage', () => {
  let component: AlsintaTanamPage;
  let fixture: ComponentFixture<AlsintaTanamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsintaTanamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsintaTanamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
