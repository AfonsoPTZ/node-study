import { type Request, type Response } from "express";

import { getUsuarioService } from "../services/usuario-service";



const GetUsuarioControler = async (req : Request, res : Response) =>{


    const data = await getUsuarioService();
    
    res.status(data.statusCode).json(data.body);


}

export { GetUsuarioControler }