/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputareaComponent } from './inputarea.component';

describe('InputareaComponent', () => {
  let component: InputareaComponent;
  let fixture: ComponentFixture<InputareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
