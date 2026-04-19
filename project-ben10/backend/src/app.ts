import express from "express";
import cors from "cors";
import { alienRouterById, alienRouter, alienRouterCreator, alienRouterDelete, alienRouterUpdate } from "./routes/aliens-route";

/**
 * Função responsável por criar e configurar a aplicação Express
 * Define middlewares globais e registra as rotas de aliens
 */
function CreateApp() {
    // Cria instância da aplicação Express
    const app = express();

    // Middleware para parsear JSON no body das requisições
    app.use(express.json());

    // Middleware para permitir requisições de diferentes origens (CORS)
    app.use(cors());

    // Registra rotas para operações com aliens
    app.use(alienRouter);           // GET /aliens
    app.use(alienRouterById);       // GET /aliens/:id
    app.use(alienRouterCreator);    // POST /aliensCreate
    app.use(alienRouterDelete);     // DELETE /aliensDelete/:id
    app.use(alienRouterUpdate);     // PUT /aliensUpdate/:id

    return app;
}

export default CreateApp();
