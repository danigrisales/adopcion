import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilongaComponent } from './milonga.component';

describe('MilongaComponent', () => {
  let component: MilongaComponent;
  let fixture: ComponentFixture<MilongaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilongaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilongaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
