import { type Request } from "express";

export interface ValidatorResult {
    isValid: boolean;
    error?: string;
}

export const validateAlienCreate = (req: Request): ValidatorResult => {
    const { name, special_ability, strength, speed } = req.body;

    if (!name) return { isValid: false, error: "Name is required" };
    if (!special_ability) return { isValid: false, error: "Special ability is required" };
    if (!strength) return { isValid: false, error: "Strength is required" };
    if (!speed) return { isValid: false, error: "Speed is required" };

    return { isValid: true };
};

export const validateAlienId = (req: Request): ValidatorResult => {
    const { id } = req.params;

    if (!id) return { isValid: false, error: "ID is required" };

    return { isValid: true };
};

export const validateAlienUpdate = (req: Request): ValidatorResult => {
    const { id } = req.params;

    if (!id) return { isValid: false, error: "ID is required" };

    return { isValid: true };
};
