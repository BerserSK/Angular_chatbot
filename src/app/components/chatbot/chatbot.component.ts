import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { opcion } from '../../interface/chatbot-interface';
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
  ultimasOpciones: opcion[] = []; // ✅ plural y claro


  constructor(private service: ServiceService) { }

  enviar(preguntar: string){
    this.mensajes.push({ emisor: 'Usuario', texto: preguntar });

    this.service.enviarPregunta(preguntar).subscribe((resp) => {
      this.mensajes.push({ emisor: 'Chatbot', texto: resp.respuesta });
      this.ultimasOpciones = resp.opciones || [];
      this.pregunta = '';
    })
  }

  registro = {
  pregunta: '',
  respuesta: '',
  opciones: ''
  };

  registroExitoso = false;

  registrarPregunta() {
    const payload = {
      pregunta: this.registro.pregunta,
      respuesta: this.registro.respuesta,
      opciones: this.registro.opciones || null
    };

    this.service.registrarPregunta(payload).subscribe({
      next: (resp) => {
        this.registroExitoso = true;
        this.registro = { pregunta: '', respuesta: '', opciones: '' };
        setTimeout(() => this.registroExitoso = false, 3000);
      },
      error: (err) => {
        console.error('Error al registrar la pregunta:', err);
      }
    });
  }
}
