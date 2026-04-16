import { type Request, type Response } from "express";
import { getAlienNameService, getAlienNameByIdService, CreateAlienService, DeleteAlienService, AlienUpdateService  } from "../services/aliens-service";
import { ok } from "../utils/https-helper";




const getAlienNameController =  async (req: Request, res: Response) => {


    const data = await getAlienNameService();

    const response = await ok(data);

    res.status(response.statusCode).json(response.body);
}

const getAlienNameControllerById = async (req: Request, res: Response) => {

    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }

    const data = await getAlienNameByIdService(Number(id));

    const response = await ok(data);

    res.status(response.statusCode).json(response.body);
    
}

const AlienCreateController = async (req: Request, res: Response) => {

    const bodyValue = req.body;
    
    if (!bodyValue) {
        return res.status(400).json({ error: "Name and ID is required" });
    }

    const data = await CreateAlienService(bodyValue);

    const response = await ok(data);

    res.status(response.statusCode).json(response.body);

}

const AlienDeleteController = async (req: Request, res: Response) => {

    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }

    const data = await DeleteAlienService(Number(id));

    const response = await ok(data);

    res.status(response.statusCode).json(response.body);
    
}

const AlienUpdateController = async (req: Request, res: Response) => {

    const { id } = req.params;

    const bodyValue = req.body;

    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }

    if (!bodyValue) {
        return res.status(400).json({ error: "Name and ID is required" });
    }

    const data = await AlienUpdateService(Number(id), bodyValue);

    const response = await ok(data);

    res.status(response.statusCode).json(response.body);

}

   

export { getAlienNameController, getAlienNameControllerById, AlienCreateController, AlienDeleteController, AlienUpdateController };