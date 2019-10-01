import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QnAPage } from './qn-a.page';

describe('QnAPage', () => {
  let component: QnAPage;
  let fixture: ComponentFixture<QnAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QnAPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QnAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
