import { type Request } from "express";


export interface ValidatorResult {
    isValid : boolean;
    message : string;


}





export const validateUserCreate = (req: Request): ValidatorResult => {


    const { name, cpf , telefone} = req.body;



    if (!name) return { isValid: false, message: "preencha o nome"};
    if (!cpf) return { isValid: false, message: "preencha o nome"};
    if (!telefone) return { isValid: false, message: "preencha o nome"}



    return {isValid: true, message:"Validaçao bem sucedida"}

    };


export const validateID = (req: Request) : ValidatorResult => {

    const  id  = req.params;
    if (!id) return { isValid: false, message: "preencha o id , messagem do validor"};


    return {isValid: true, message:"Validaçao bem sucedida"}


}
