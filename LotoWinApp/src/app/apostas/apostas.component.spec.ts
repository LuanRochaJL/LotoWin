/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApostasComponent } from './apostas.component';

describe('ApostasComponent', () => {
  let component: ApostasComponent;
  let fixture: ComponentFixture<ApostasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApostasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApostasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
