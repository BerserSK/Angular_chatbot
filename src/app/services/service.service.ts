import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RespuestaBot } from '../interface/chatbot-interface';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'http://localhost:8080/api/chatbot/pregunta';

  constructor(private http: HttpClient) { } 

  enviarPregunta(pregunta: string): Observable<RespuestaBot> {
    return this.http.post<RespuestaBot>(this.apiUrl, { pregunta });
  }

  registrarPregunta(data: { pregunta: string; respuesta: string; opciones?: string }): Observable<any> {
    return this.http.post('http://localhost:8080/api/chatbot/registrar', data);
  }
}
