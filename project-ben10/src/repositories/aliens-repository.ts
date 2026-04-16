import { type Alien, type AlienUpdate } from "../model/aliens-model";

const database: Alien[] = [
    {id: 1, name: "Quatro-Braços"},
    {id: 2, name: "Fantasmatico"}
]

const findAllAliens = async (): Promise<Alien[]> => {
    return database;
}

const findAlienById = async (id: number): Promise<Alien | null> => {
    const alien = database.find(alien => alien.id === id);
    return alien || null;
}

const CreateAlienRepository = async (alien: Alien): Promise<Alien | null> => {
    database.push(alien);
    return alien || null;
}

const DeleteAlienRepository = async (id: number): Promise<Alien | null> => {
    const index = database.findIndex(alien => alien.id === id);
    if (index !== -1) {
        const deletedAlien = database.splice(index, 1)[0];
        return deletedAlien || null;
    }
    return null;
}

const UpdateAlienRepository = async (id: number, alienUpdate: AlienUpdate): Promise<Alien | null> => {
    const alien = database.find(a => a.id === id);
    if (alien) {
        alien.name = alienUpdate.name;
        return alien;
    }
    return null;
}

export { findAllAliens, findAlienById, CreateAlienRepository, DeleteAlienRepository, UpdateAlienRepository    };
