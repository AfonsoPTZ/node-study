import { type Request, type Response, type NextFunction } from "express";
import { type ValidatorResult } from "../validator/validor-alien";
import { badRequest } from "../utils/https-helper";

/**
 * Middleware único e genérico para validar qualquer coisa
 * Aceita uma função validadora que recebe o request inteiro
 * Flexível para validar body, params, query, ou qualquer combinação
 */
export const validate = (
    validatorFn: (req: Request) => ValidatorResult
) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const validation = validatorFn(req);

        if (!validation.isValid) {
            const response = await badRequest(validation.error || "Validation failed");
            return res.status(response.statusCode).json(response.body);
        }

        next();
    };
};
