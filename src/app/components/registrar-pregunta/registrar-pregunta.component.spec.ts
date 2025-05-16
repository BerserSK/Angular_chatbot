import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPreguntaComponent } from './registrar-pregunta.component';

describe('RegistrarPreguntaComponent', () => {
  let component: RegistrarPreguntaComponent;
  let fixture: ComponentFixture<RegistrarPreguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarPreguntaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
