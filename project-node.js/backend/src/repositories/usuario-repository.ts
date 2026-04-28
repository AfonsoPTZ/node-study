import prisma from "../db/conexao";


import { type Usuario } from "../model/usuario-model";



const getUsuarioRepository = async (): Promise<Usuario[]> => {

    return await prisma.usuarios.findMany();

};


const CreateUserRepository = async (usuario : Usuario): Promise<Usuario> => {

    return await prisma.usuarios.create({

        data: usuario
    });

};


const deleteUserRepository = async (id : number): Promise<Usuario> => {

    return await prisma.usuarios.delete({

        where: { id }
    });

};


export { getUsuarioRepository, CreateUserRepository, deleteUserRepository }
