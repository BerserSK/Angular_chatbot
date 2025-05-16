import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Opcion, RespuestaBot } from '../../interface/chatbot-interface';
import { ServiceService } from '../../services/service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, RouterModule ],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent{ //implements OnInit 
   pregunta = '';
  mensajes: { emisor: string; texto: string }[] = [];
  ultimasOpciones: Opcion[] = [];

  constructor(private service: ServiceService) {}

    ngOnInit() {
    // 👇 prueba forzada
    /*this.ultimasOpciones = [
      { texto: 'Opción de prueba', pregunta: 'Pregunta de prueba' }
    ];*/
  }

  enviar(textoPregunta: string) {
  if (!textoPregunta.trim()) return;

  this.mensajes.push({ emisor: 'Usuario', texto: textoPregunta });
  this.ultimasOpciones = []; // Limpiar opciones anteriores

  this.service.enviarPregunta(textoPregunta).subscribe({
    next: (resp: RespuestaBot) => {
      this.mensajes.push({ emisor: 'Bot', texto: resp.respuesta });

      console.log('Opciones recibidas:', resp.opciones);  // DEBUG
      // Nuevas opciones dinámicas desde backend
      this.ultimasOpciones = resp.opciones || [];

      this.pregunta = '';
    },
    error: (err) => {
      this.mensajes.push({ emisor: 'Bot', texto: 'Error al consultar.' });
      console.error(err);
    }
  });
}

  }


