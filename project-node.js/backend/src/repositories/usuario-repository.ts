import prisma from "../db/conexao";


import { type Usuario } from "../model/usuario-model";



const getUsuarioRepository = async (): Promise<Usuario[]> => {

    return await prisma.usuarios.findMany();

}



export { getUsuarioRepository }
