import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscaficionadoComponent } from './escaficionado.component';

describe('EscaficionadoComponent', () => {
  let component: EscaficionadoComponent;
  let fixture: ComponentFixture<EscaficionadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscaficionadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscaficionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
