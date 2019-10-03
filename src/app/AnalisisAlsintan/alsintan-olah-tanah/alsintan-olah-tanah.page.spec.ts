import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsintanOlahTanahPage } from './alsintan-olah-tanah.page';

describe('AlsintanOlahTanahPage', () => {
  let component: AlsintanOlahTanahPage;
  let fixture: ComponentFixture<AlsintanOlahTanahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsintanOlahTanahPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsintanOlahTanahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
