import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Opcion, RespuestaBot } from '../../interface/chatbot-interface';
import { ServiceService } from '../../services/service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule ],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  pregunta = '';
  mensajes: { emisor: string; texto: string }[] = [];
  ultimasOpciones: Opcion[] = []; // ✅ plural y claro


  constructor(private service: ServiceService) { }

  opcionesList: Opcion[] = [];

  agregarOpcion() {
    this.opcionesList.push({ texto: '', pregunta: '' });
  }

  eliminarOpcion(index: number) {
    this.opcionesList.splice(index, 1);
  }

  enviar(textoPregunta: string) {
    if (!textoPregunta.trim()) return;

    this.mensajes.push({ emisor: 'Usuario', texto: textoPregunta });
    this.ultimasOpciones = []; // Limpiar opciones previas

    this.service.enviarPregunta(textoPregunta).subscribe({
      next: (resp: RespuestaBot) => {
        this.mensajes.push({ emisor: 'Bot', texto: resp.respuesta });
        this.ultimasOpciones = resp.opciones || [];
        this.pregunta = '';
      },
      error: (err) => {
        this.mensajes.push({ emisor: 'Bot', texto: 'Error al consultar.' });
        console.error(err);
      }
    });
  }


  

  registro = {
    pregunta: '',
    respuesta: '',
    opciones: [] as Opcion[]
  };


  registroExitoso = false;

  registrarPregunta() {
  const opcionesStr = this.opcionesList.length > 0 ? JSON.stringify(this.opcionesList) : undefined;

  

  const payload = {
    pregunta: this.registro.pregunta,
    respuesta: this.registro.respuesta,
    opciones: this.registro.opciones.length > 0 ? JSON.stringify(this.registro.opciones) : undefined
  };

  this.service.registrarPregunta(payload).subscribe({
    next: () => {
      this.registroExitoso = true;
      this.registro = { pregunta: '', respuesta: '', opciones: [] };
      this.opcionesList = []; // Limpia también las opciones
      setTimeout(() => this.registroExitoso = false, 3000);
      
    },
    error: (err) => {
      console.error('Error al registrar la pregunta:', err);
    }
  });



     this.service.registrarPregunta(payload).subscribe({
    next: (resp) => {
      this.registroExitoso = true;
      this.registro = { pregunta: '', respuesta: '', opciones: [] };
      setTimeout(() => this.registroExitoso = false, 3000);
    },
    error: (err) => {
      console.error('Error al registrar la pregunta:', err);
      }

      
    });

    
  }



}
