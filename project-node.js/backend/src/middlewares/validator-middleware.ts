import { type Request, type Response, type NextFunction } from "express";
import { type ValidatorResult } from "../validators/usuario-validator";
import { badRequest } from "../utils/http-response";






export const validate = ( validatorFn: (req: Request) => ValidatorResult ) => {

    return async (req: Request, res: Response, next: NextFunction) => {
        const validation = validatorFn(req)

        if (!validation.isValid){
            const response = await badRequest(validation.message);

        return res.status(response.statusCode).json(response.body);        }


        next();
    }
}