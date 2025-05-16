import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RespuestaBot } from '../interface/chatbot-interface';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'http://localhost:8080/api/chatbot';

  constructor(private http: HttpClient) { } 

  enviarPregunta(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registrar`, payload);
  }

  registrarPregunta(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registrar`, payload);
  }
}
