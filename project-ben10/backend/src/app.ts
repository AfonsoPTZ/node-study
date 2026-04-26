import express from "express";
import cors from "cors";
import { alienRouterById, alienRouter, alienRouterCreator, alienRouterDelete, alienRouterUpdate } from "./routes/aliens-route";
import { notFound } from "./utils/https-helper";

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
    app.use(cors({ origin: "*" }));

    // Debug middleware para ver requisições
    app.use((req, res, next) => {
        console.log(`📍 ${req.method} ${req.path}`);
        next();
    });

    // Registra rotas para operações com aliens
    
    app.use(alienRouter);           // GET /aliens
    app.use(alienRouterById);       // GET /aliens/:id
    app.use(alienRouterCreator);    // POST /aliensCreate
    app.use(alienRouterDelete);     // DELETE /aliensDelete/:id
    app.use(alienRouterUpdate);     // PUT /aliensUpdate/:id

    // Middleware catch-all para rotas não encontradas
    app.use(async (req, res) => {
        const response = await notFound("Route not found");
        return res.status(response.statusCode).json({ status: "error", ...response.body });
    });

    return app;
}

export default CreateApp;
