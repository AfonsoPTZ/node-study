import prisma from "../config/db";
import { type Alien } from "../model/aliens-model";

// Busca todos os alienígenas no banco de dados
const findAllAliens = async (): Promise<Alien[]> => {
    try {
        return await prisma.alien.findMany();
    } catch {
        return [];
    }
};

// Busca um alienígena específico pelo ID
const findAlienById = async (id: number): Promise<Alien | null> => {
    try {
        return await prisma.alien.findUnique({
            where: { id }
        });
    } catch {
        return null;
    }
};

// Cria um novo alienígena no banco de dados
const CreateAlienRepository = async (alien: Alien): Promise<Alien | null> => {
    try {
        return await prisma.alien.create({
            data: alien
        });
    } catch {
        return null;
    }
};

// Deleta um alienígena do banco de dados
const DeleteAlienRepository = async (id: number): Promise<Alien | null> => {
    try {
        return await prisma.alien.delete({
            where: { id }
        });
    } catch {
        return null;
    }
};

// Atualiza um alienígena no banco de dados
const UpdateAlienRepository = async (id: number, alienUpdate: Alien): Promise<Alien | null> => {
    try {
        return await prisma.alien.update({
            where: { id },
            data: alienUpdate
        });
    } catch {
        return null;
    }
};

export { findAllAliens, findAlienById, CreateAlienRepository, DeleteAlienRepository, UpdateAlienRepository };
