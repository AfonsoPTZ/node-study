import { Router } from "express";
import { getAlienNameController, getAlienNameControllerById, AlienCreateController, AlienDeleteController, AlienUpdateController } from "../controllers/aliens-controller";
import { validate } from "../middlewares/validator-middleware";
import { validateAlienCreate, validateAlienId, validateAlienUpdate } from "../validator/validor-alien";

// Criação de routers separados para cada operação
const alienRouter = Router();
const alienRouterById = Router();
const alienRouterCreator = Router();
const alienRouterDelete = Router();
const alienRouterUpdate = Router();

/**
 * Rota para buscar todos os alienígenas
 * GET /aliens
 */
alienRouter.get("/aliens", getAlienNameController);

/**
 * Rota para buscar um alienígena específico
 * GET /aliens/:id
 * Validação: ID deve ser um número válido
 */
alienRouterById.get("/aliens/:id", validate(validateAlienId), getAlienNameControllerById);

/**
 * Rota para criar um novo alienígena
 * POST /aliensCreate
 * Validação: name, type, special_ability são obrigatórios
 */
alienRouterCreator.post("/aliensCreate", validate(validateAlienCreate), AlienCreateController);

/**
 * Rota para deletar um alienígena
 * DELETE /aliensDelete/:id
 * Validação: ID deve ser um número válido
 */
alienRouterDelete.delete("/aliensDelete/:id", validate(validateAlienId), AlienDeleteController);

/**
 * Rota para atualizar um alienígena
 * PUT /aliensUpdate/:id
 * Validação: ID e pelo menos um campo no body
 */
alienRouterUpdate.put("/aliensUpdate/:id", validate(validateAlienUpdate), AlienUpdateController);

export { alienRouter, alienRouterById, alienRouterCreator, alienRouterDelete, alienRouterUpdate };