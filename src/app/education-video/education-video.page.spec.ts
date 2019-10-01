import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationVideoPage } from './education-video.page';

describe('EducationVideoPage', () => {
  let component: EducationVideoPage;
  let fixture: ComponentFixture<EducationVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationVideoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
