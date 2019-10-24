import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscprofesionalComponent } from './escprofesional.component';

describe('EscprofesionalComponent', () => {
  let component: EscprofesionalComponent;
  let fixture: ComponentFixture<EscprofesionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscprofesionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscprofesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
