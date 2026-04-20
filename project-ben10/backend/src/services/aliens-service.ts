
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
        return await ok(allAliens, "Aliens listados com sucesso");
    }

    return await noContent("Nenhum alien encontrado");
};

/**
 * Busca um alienígena específico pelo ID
 * Retorna 200 (OK) se encontrado ou 404 (Not Found) se não existir
 */
const getAlienNameByIdService = async (id: number): Promise<HttpResponse> => {
    const alienFound = await findAlienById(id);

    if (alienFound) {
        return await ok(alienFound, "Alienígena encontrado com sucesso");
    }

    return await notFound("Alienígena não encontrado");
};

/**
 * Cria um novo alienígena no banco de dados
 * Validação delegada ao middleware
 * Retorna 200 (OK) com o alienígena criado ou 400 (Bad Request) se falhar
 */
const CreateAlienService = async (alien: Alien): Promise<HttpResponse> => {
    const newAlien = await CreateAlienRepository(alien);

    if (newAlien) {
       return await ok(newAlien, "Alien ígena criado com sucesso");
    }

    return await badRequest("Falha ao criar alienígena");
};

/**
 * Deleta um alienígena do banco de dados
 * Verifica se o alienígena existe antes de deletar
 * Retorna 200 (OK) com alienígena deletado, 404 (Not Found) se não existir
 */
const DeleteAlienService = async (id: number): Promise<HttpResponse> => {
    const alienFound = await findAlienById(id);

    if (!alienFound) {
        return await notFound("Alienígena não encontrado");
    }

    const deletedAlien = await DeleteAlienRepository(id);

    if (deletedAlien) {
        return await ok(deletedAlien, "Alienígena deletado com sucesso");
    }

    return await badRequest("Falha ao deletar alienígena");
};

/**
 * Atualiza um alienígena no banco de dados
 * Verifica se o alienígena existe antes de atualizar
 * Retorna 200 (OK) com alienígena atualizado ou erros apropriados
 */
const AlienUpdateService = async (id: number, alienUpdate: Alien): Promise<HttpResponse> => {
    const alienFound = await findAlienById(id);

    if (!alienFound) {
        return await notFound("Alienígena não encontrado");
    }

    if (!alienUpdate || Object.keys(alienUpdate).length === 0) {
        return await badRequest("Pelo menos um campo deve ser fornecido para atualizar");
    }

    const updatedAlien = await UpdateAlienRepository(id, alienUpdate);

    if (updatedAlien) {
        return await ok(updatedAlien, "Alienígena atualizado com sucesso");
    }

    return await badRequest("Falha ao atualizar alienígena");
};

export { getAlienNameService, getAlienNameByIdService, CreateAlienService, DeleteAlienService, AlienUpdateService };