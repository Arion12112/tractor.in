import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsintanPanenPage } from './alsintan-panen.page';

describe('AlsintanPanenPage', () => {
  let component: AlsintanPanenPage;
  let fixture: ComponentFixture<AlsintanPanenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsintanPanenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsintanPanenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
