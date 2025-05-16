import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Opcion } from '../../interface/chatbot-interface';

@Component({
  selector: 'app-registrar-pregunta',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registrar-pregunta.component.html',
  styleUrl: './registrar-pregunta.component.css'
})
export class RegistrarPreguntaComponent {
  registro = {
    pregunta: '',
    respuesta: '',
    opciones: [] as Opcion[],
  };

  opcionesList: { texto: string; pregunta: string }[] = [];
  registroExitoso = false;

  nuevaOpcion = { texto: '', pregunta: '' };

  constructor(private service: ServiceService) {}

  agregarOpcion() {
  if (this.nuevaOpcion.texto.trim() && this.nuevaOpcion.pregunta.trim()) {
      this.opcionesList.push({ ...this.nuevaOpcion });
      this.nuevaOpcion = { texto: '', pregunta: '' };
    }
  }

  eliminarOpcion(index: number) {
    this.opcionesList.splice(index, 1);
  }

  registrarPregunta() {
    const payload = {
      pregunta: this.registro.pregunta,
      respuesta: this.registro.respuesta,
      opciones: this.opcionesList.length > 0 ? JSON.stringify(this.opcionesList) : null
    };
    console.log("Opciones actuales:", this.opcionesList);
    console.log("Payload a enviar:", payload);

    console.log("Payload a enviar:", payload);

    this.service.registrarPregunta(payload).subscribe({
      next: () => {
        this.registroExitoso = true;
        this.registro = { pregunta: '', respuesta: '', opciones: [] };
        this.opcionesList = [];
        setTimeout(() => this.registroExitoso = false, 3000);
      },
      error: (err) => {
        console.error('Error al registrar la pregunta:', err);
      },
    });
  }
}
