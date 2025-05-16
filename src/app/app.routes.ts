import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { RegistrarPreguntaComponent } from './components/registrar-pregunta/registrar-pregunta.component';

export const routes: Routes = [
    { path: '', component: ChatbotComponent },
  { path: 'registrar-pregunta', component: RegistrarPreguntaComponent }
];
