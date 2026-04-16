
import { type HttpResponse, noContent, ok } from "../utils/https-helper";
import { findAlienById, findAllAliens, CreateAlienRepository, DeleteAlienRepository, UpdateAlienRepository    } from "../repositories/aliens-repository";
import { type Alien, type AlienUpdate } from "../model/aliens-model";

const getAlienNameService = async (): Promise<HttpResponse> => {

    const data = await findAllAliens();

    let response = null;

    if (data)  {
        response = await ok(data);
    } else {
        response = await noContent();
    }

    return response;
}


const getAlienNameByIdService = async (id: number): Promise<HttpResponse> => {

    const data = await findAlienById(id);

    let response = null;

    if (data)  {
        response = await ok(data);
    } else {
        response = await noContent();
    }

    return response;
}

const DeleteAlienService = async (id: number): Promise<HttpResponse> => {

    const data = await DeleteAlienRepository(id);

    let response = null;

    if (data)  {
        response = await ok(data);
    } else {
        response = await noContent();
    }

    return response;
}



const CreateAlienService = async (alien: Alien): Promise<HttpResponse> => {

    const data = await CreateAlienRepository(alien);

    let response = null;

    if (data)  {
        response = await ok(data);
    } else {
        response = await noContent();
    }

    return response;
}


const AlienUpdateService = async (id: number, alienUpdate: AlienUpdate): Promise<HttpResponse> => {

    const data = await UpdateAlienRepository(id, alienUpdate);

    let response = null;

    if (data)  {
        response = await ok(data);
    } else {
        response = await noContent();
    }

    return response;

}




export { getAlienNameService, getAlienNameByIdService, CreateAlienService, DeleteAlienService, AlienUpdateService };