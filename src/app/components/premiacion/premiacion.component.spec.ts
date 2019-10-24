import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiacionComponent } from './premiacion.component';

describe('PremiacionComponent', () => {
  let component: PremiacionComponent;
  let fixture: ComponentFixture<PremiacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
