import { type Request, type Response } from "express";
import { getAlienNameService, getAlienNameByIdService, CreateAlienService, DeleteAlienService, AlienUpdateService } from "../services/aliens-service";

/**
 * Controlador para buscar todos os alienígenas
 * Chama o service de busca e retorna resposta formatada
 */
const getAlienNameController = async (req: Request, res: Response) => {
    const data = await getAlienNameService();
    res.status(data.statusCode).json(data.body);
};

/**
 * Controlador para buscar um alienígena pelo ID
 * O middleware de validação já verifica se o ID é válido
 * Chama o service com o ID dos parâmetros
 */
const getAlienNameControllerById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = await getAlienNameByIdService(Number(id));
    res.status(data.statusCode).json(data.body);
};

/**
 * Controlador para criar um novo alienígena
 * O middleware de validação já verifica se o body está correto
 * Chama o service com os dados do corpo da requisição
 */
const AlienCreateController = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const data = await CreateAlienService(bodyValue);
    res.status(data.statusCode).json(data.body);
};

/**
 * Controlador para deletar um alienígena
 * O middleware de validação já verifica se o ID é válido
 * Chama o service para remover o alienígena do banco
 */
const AlienDeleteController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = await DeleteAlienService(Number(id));
    res.status(data.statusCode).json(data.body);
};

/**
 * Controlador para atualizar um alienígena
 * O middleware de validação já verifica se ID e body são válidos
 * Chama o service com ID e dados de atualização
 */
const AlienUpdateController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const bodyValue = req.body;
    const data = await AlienUpdateService(Number(id), bodyValue);
    res.status(data.statusCode).json(data.body);
};

export { getAlienNameController, getAlienNameControllerById, AlienCreateController, AlienDeleteController, AlienUpdateController };