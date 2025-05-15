// No necesitas una interfaz vacía llamada ChatbotInterface, puedes eliminarla si no tiene uso
// export interface ChatbotInterface {}

export interface Opcion {
  texto: string;
  pregunta: string;
}

export interface RespuestaBot {
  id: number;
  pregunta: string;
  respuesta: string;
  opciones?: Opcion[];
}

export interface PreguntaRegistro {
  pregunta: string;
  respuesta: string;
  opciones?: string; // Opcional. Si es un JSON string, puede ser validado antes de enviarlo
}
