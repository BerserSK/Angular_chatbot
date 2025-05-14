export interface ChatbotInterface {
}

export interface opcion {
    texto: string;
    pregunta: string;
}

export interface RespuestaBot {
    id: number;
    pregunta: string;
    respuesta: string;
    opciones?: opcion[];
}