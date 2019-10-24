import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaficionadoComponent } from './paficionado.component';

describe('PaficionadoComponent', () => {
  let component: PaficionadoComponent;
  let fixture: ComponentFixture<PaficionadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaficionadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaficionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
