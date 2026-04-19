
import { type HttpResponse, noContent, ok, badRequest, notFound } from "../utils/https-helper";
import { findAlienById, findAllAliens, CreateAlienRepository, DeleteAlienRepository, UpdateAlienRepository } from "../repositories/aliens-repository";
import { type Alien } from "../model/aliens-model";

/**
 * Busca todos os alienígenas no banco de dados
 * Retorna 200 (OK) com lista de aliens ou 204 (No Content) se vazio
 */
const getAlienNameService = async (): Promise<HttpResponse> => {
    const allAliens = await findAllAliens();

    if (allAliens && allAliens.length > 0) {
        return await ok(allAliens);
    }

    return await noContent();
};

/**
 * Busca um alienígena específico pelo ID
 * Retorna 200 (OK) se encontrado ou 404 (Not Found) se não existir
 */
const getAlienNameByIdService = async (id: number): Promise<HttpResponse> => {
    const alienFound = await findAlienById(id);

    if (alienFound) {
        return await ok(alienFound);
    }

    return await notFound("Alien not found");
};

/**
 * Cria um novo alienígena no banco de dados
 * Validações adicionais no service além do middleware
 * Retorna 200 (OK) com o alienígena criado ou 400 (Bad Request) se falhar
 */
const CreateAlienService = async (alien: Alien): Promise<HttpResponse> => {
    if (!alien || !alien.name || !alien.special_ability) {
        return await badRequest("Invalid alien data: name and special_ability are required");
    }

    const newAlien = await CreateAlienRepository(alien);

    if (newAlien) {
        return await ok(newAlien);
    }

    return await badRequest("Failed to create alien");
};

/**
 * Deleta um alienígena do banco de dados
 * Verifica se o alienígena existe antes de deletar
 * Retorna 200 (OK) com alienígena deletado, 404 (Not Found) se não existir
 */
const DeleteAlienService = async (id: number): Promise<HttpResponse> => {
    const alienFound = await findAlienById(id);

    if (!alienFound) {
        return await notFound("Alien not found");
    }

    const deletedAlien = await DeleteAlienRepository(id);

    if (deletedAlien) {
        return await ok(deletedAlien);
    }

    return await badRequest("Failed to delete alien");
};

/**
 * Atualiza um alienígena no banco de dados
 * Verifica se o alienígena existe antes de atualizar
 * Retorna 200 (OK) com alienígena atualizado ou erros apropriados
 */
const AlienUpdateService = async (id: number, alienUpdate: Alien): Promise<HttpResponse> => {
    const alienFound = await findAlienById(id);

    if (!alienFound) {
        return await notFound("Alien not found");
    }

    if (!alienUpdate || Object.keys(alienUpdate).length === 0) {
        return await badRequest("At least one field must be provided for update");
    }

    const updatedAlien = await UpdateAlienRepository(id, alienUpdate);

    if (updatedAlien) {
        return await ok(updatedAlien);
    }

    return await badRequest("Failed to update alien");
};

export { getAlienNameService, getAlienNameByIdService, CreateAlienService, DeleteAlienService, AlienUpdateService };