import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahjualPage } from './tambahjual.page';

describe('TambahjualPage', () => {
  let component: TambahjualPage;
  let fixture: ComponentFixture<TambahjualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahjualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahjualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
