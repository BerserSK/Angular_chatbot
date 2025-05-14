import { bootstrapApplication } from '@angular/platform-browser';
import { ChatbotComponent } from './app/components/chatbot/chatbot.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(ChatbotComponent, {
  providers: [provideHttpClient()] // ✅ moderna y sin deprecaciones
})
  .catch((err) => console.error(err));
