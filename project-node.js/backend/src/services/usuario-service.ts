import { type HttpResponse, noContent, ok, badRequest, notFound } from "../utils/http-response";

import { getUsuarioRepository } from "../repositories/usuario-repository"


import { type Usuario } from "../model/usuario-model";



const getUsuarioService = async(): Promise<HttpResponse> => {

    try{

    const usuario = await getUsuarioRepository();

    if (usuario  && usuario.length > 0 ) {
        return await ok(usuario, "Usuarios listados com sucesso");
    }

    return await noContent("Nenhum usuario encontrado");
} catch (error){
    return await badRequest("falha ao listar alieniginas")
}

};




export { getUsuarioService }