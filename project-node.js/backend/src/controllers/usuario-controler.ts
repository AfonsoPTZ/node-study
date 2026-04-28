import { type Request, type Response } from "express";

import { getUsuarioService, CreateUserService, DeleteUserService, updateUserService} from "../services/usuario-service";



const GetUsuarioControler = async (req : Request, res : Response) =>{


    const data = await getUsuarioService();
    
    res.status(data.statusCode).json(data.body);


}


const CreateUserControler = async (req : Request, res : Response) =>{

    const dados = req.body
    const data = await CreateUserService(dados);
    
    res.status(data.statusCode).json(data.body);


}


const DeleteUserControler = async (req : Request, res : Response) =>{

    const { id } = req.params
    const data = await DeleteUserService(Number(id));
    
    res.status(data.statusCode).json(data.body);


}




const updateUserControler = async (req : Request, res : Response) =>{

    const { id } = req.params
    const dados = req.body
    const data = await updateUserService(Number(id), dados);
    
    res.status(data.statusCode).json(data.body);


}

export { GetUsuarioControler, CreateUserControler, DeleteUserControler, updateUserControler }