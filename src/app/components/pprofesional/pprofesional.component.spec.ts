import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PprofesionalComponent } from './pprofesional.component';

describe('PprofesionalComponent', () => {
  let component: PprofesionalComponent;
  let fixture: ComponentFixture<PprofesionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PprofesionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PprofesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
