import { type HttpResponse, noContent, ok, badRequest, notFound } from "../utils/http-response";

import { getUsuarioRepository, CreateUserRepository , deleteUserRepository } from "../repositories/usuario-repository"


import { type Usuario } from "../model/usuario-model";



const getUsuarioService = async(): Promise<HttpResponse> => {

    try{

    const usuario = await getUsuarioRepository();

    if (usuario  && usuario.length > 0 ) {
        return await ok(usuario, "Usuarios listados com sucesso");
    }

    return await noContent("Nenhum usuario encontrado");
} catch (error){
    return await badRequest("falha ao listar usuarios")
}

};


const CreateUserService = async(usuario : Usuario): Promise<HttpResponse> => {

 

    const newusuario = await CreateUserRepository(usuario);

    if (newusuario) {
        return await ok(newusuario, "Usuarios criado com sucesso");
    }


    return await badRequest("falha ao criar usuario");


};



const DeleteUserService = async(id : number): Promise<HttpResponse> => {

 

    const deleteuser = await deleteUserRepository(id);

    if (deleteuser) {
        return await ok(deleteuser, "Usuarios deletado com sucesso");
    }


    return await badRequest("falha ao deletar usuario");


};







export { getUsuarioService, CreateUserService, DeleteUserService }