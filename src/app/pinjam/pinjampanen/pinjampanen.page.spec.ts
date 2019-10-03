import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinjampanenPage } from './pinjampanen.page';

describe('PinjampanenPage', () => {
  let component: PinjampanenPage;
  let fixture: ComponentFixture<PinjampanenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinjampanenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinjampanenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
