/**
 * Interface que representa um alienígena do Ben 10
 * Usado para tipagem em toda a aplicação (CREATE, READ, UPDATE)
 */
export interface Alien {
    id?: number;
    name: string;
    special_ability: string;
    strength: number;
    speed: number;
}